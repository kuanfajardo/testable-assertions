// MARK: Public

/// Unconditionally prints a given message and stops execution.
///
/// - Parameters:
///   - message: The string to print. The default is an empty string.
///   - file: The file name to print with message. The default is the file where
///     `fatalError(_:file:line:)` is called.
///   - line: The line number to print along with message. The default is the line number where
///     `fatalError(_:file:line:)` is called.
///
/// - Important: In production, this method calls straight through to `Swift.fatalError`.
///
/// - SeeAlso: Use `XCTAssertFatalError(in:)` to assert that this method gets called in tests.
public func fatalError(
  _ message: @autoclosure () -> String = String(),
  file: StaticString = #file,
  line: UInt = #line
) -> Never {
  FatalError.block(message(), file, line)
}

// MARK: Internal

/// Namespace for overriding implementation of `fatalError`.
enum FatalError {

  // MARK: Properties

  /// The default fatal error block.
  private static var defaultBlock = Swift.fatalError(_:file:line:)

  /// The block to be executed when `fatalError` is called.
  ///
  /// Defaults to `Swift.fatalError` but can be overriden by `replace(with:)` *in test code*.
  fileprivate static var block: (@autoclosure() -> String, StaticString, UInt) -> Never = defaultBlock
}

#if canImport(XCTest)

  // MARK: Replacement API (Test Code Only)

  extension FatalError {

    /// Replaces `Swift.fatalError` with an arbitrary block of code to execute when `fatalError` gets
    /// called.
    static func replace(with block: @escaping (String) -> ()) {
      self.block = { (message, _, _) in
        block(message())
        // A requirement of `block` is that it never returns; an infinite loop achieves that. Note
        // that this means that the thread that `block` is eventually called on will be permanantly
        // blocked.
        while true { continue }
      }
    }

    /// Restores `block` to its default, i.e. `Swift.fatalError`.
    static func restore() {
      block = defaultBlock
    }
  }

#endif // canImport(XCTest)
