// MARK: Public

/// Checks a necessary condition for making forward progress.
///
/// - Parameters:
///   - condition: The condition to test. condition is not evaluated in -Ounchecked builds.
///   - message: A string to print if condition is evaluated to false in a playground or -Onone
///     build. The default is an empty string.
///   - file: The file name to print with message if the precondition fails. The default is the file
///     where precondition(_:_:file:line:) is called.
///   - line: The line number to print along with message if the assertion fails. The default is the
///     line number where precondition(_:_:file:line:) is called.
///
/// - Important: In production, this method calls straight through to `Swift.precondition`.
///
/// - SeeAlso: Use `XCTAssertPreconditionFailure(in:)` to assert that this method gets called and
///   fails in tests.
public func precondition(
  _ condition: @autoclosure () -> Bool,
  _ message: @autoclosure () -> String = String(),
  file: StaticString = #file,
  line: UInt = #line
) {
  Precondition.block(condition(), message(), file, line)
}

// MARK: Internal

/// Namespace for overriding implementation of `precondition`.
enum Precondition {

  // MARK: Properties

  /// The default precondition block.
  private static var defaultBlock = Swift.precondition(_:_:file:line:)

  /// The block to be executed when `precondition` is called.
  ///
  /// Defaults to `Swift.precondition` but can be overriden by `replace(with:)` *in test code*.
  fileprivate static var block: (@autoclosure () -> Bool, @autoclosure() -> String, StaticString, UInt) -> () = defaultBlock
}

#if canImport(XCTest)

  // MARK: Replacement API (Test Code Only)

  extension Precondition {

    /// Replaces `Swift.precondition` with an arbitrary block of code to execute when `precondition`
    /// gets called.
    static func replace(with block: @escaping (Bool, String) -> ()) {
      self.block = { (condition, message, _, _) in
        block(condition(), message())
      }
    }

    /// Restores `block` to its default, i.e. `Swift.precondition`.
    static func restore() {
      block = defaultBlock
    }
  }

#endif // canImport(XCTest)
