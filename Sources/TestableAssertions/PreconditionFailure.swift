// MARK: Public

/// Indicates that a precondition was violated.
///
/// - Parameters:
///   - message: A string to print in a playground or -Onone build. The default is an empty string.
///   - file: The file name to print with message. The default is the file where
///     `preconditionFailure(_:file:line:)` is called.
///   - line: The line number to print along with message. The default is the line number where
///     `preconditionFailure(_:file:line:)` is called.
///
/// - Important: In production, this method calls straight through to `Swift.preconditionFailure`.
///
/// - SeeAlso: Use `XCTAssertPreconditionFailure(in:)` to assert that this method gets called
///   fails in tests.
public func preconditionFailure(
  _ message: @autoclosure () -> String = String(),
  file: StaticString = #file,
  line: UInt = #line
) -> Never {
  PreconditionFailure.block(message(), file, line)
}

// MARK: Internal

/// Namespace for overriding implementation of `preconditionFailure`.
enum PreconditionFailure {

  // MARK: Properties

  /// The default precondition failure block.
  private static var defaultBlock = Swift.preconditionFailure(_:file:line:)

  /// The block to be executed when `preconditionFailure` is called.
  ///
  /// Defaults to `Swift.preconditionFailure` but can be overriden by `replace(with:)`
  /// *in test code*.
  fileprivate static var block: (@autoclosure() -> String, StaticString, UInt) -> Never = defaultBlock
}

#if canImport(XCTest)

  // MARK: Replacement API (Test Code Only)

  extension PreconditionFailure {

    /// Replaces `Swift.preconditionFailure` with an arbitrary block of code to execute when
    /// `preconditionFailure` gets called.
    static func replace(with block: @escaping (String) -> ()) {
      self.block = { (message, _, _) in
        block(message())
        while true { continue }
      }
    }

    /// Restores `block` to its default, i.e. `Swift.preconditionFailure`.
    static func restore() {
      block = defaultBlock
    }
  }

#endif // canImport(XCTest)
