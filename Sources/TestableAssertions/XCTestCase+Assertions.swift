#if canImport(XCTest)

  import XCTest

  extension XCTestCase {

    // MARK: Public

    /// Asserts that either `preconditionFailure` or `precondition` with a failing condition is called
    /// in a given block of code.
    ///
    /// - Parameters:
    ///   - queue: The queue on which to execute `block`.
    ///   - timeout: The amount of time to wait for `block` to finish executing asynchronously on
    ///     `queue`. Defaults to 2 seconds.
    ///   - block: The code to test.
    ///   - file: The file name to print with message if the assertion fails. The default is the file
    ///     where `XCTAssertPreconditionFailure(on:timeout:block:file:line:)` is called.
    ///   - line: The line number to print along with message if the assertion fails. The default is
    ///     the line number where `XCTAssertPreconditionFailure(on:timeout:block:file:line:)` is
    ///     called.
    public func XCTAssertPreconditionFailure(
      on queue: DispatchQueue = .global(qos: .userInitiated),
      timeout: TimeInterval = 2,
      block: @escaping () -> Void,
      file: StaticString = #filePath,
      line: UInt = #line
    ) {
      defer {
        Precondition.restore()
        PreconditionFailure.restore()
      }

      // Replace `precondition` and `preconditionFailure` blocks to fulfill test expectation.
      let expectation = self.expectation(description: "Precondition failure expectation")

      Precondition.replace { (condition, message) in
        XCTAssertFalse(condition, message)
        expectation.fulfill()
      }

      PreconditionFailure.replace { (_) in
        expectation.fulfill()
      }

      let failureSummary = FailureSummary(
        description: "Expected precondition failure in block.", file: file, line: line)

      run(
        block,
        asynchronouslyOn: queue,
        waitingForExpectationsWithTimeout: timeout,
        recordingFailureAs: failureSummary
      )
    }

    /// Asserts that `fatalError` is called in a given block of code.
    ///
    /// - Parameters:
    ///   - queue: The queue on which to execute `block`.
    ///   - timeout: The amount of time to wait for `block` to finish executing asynchronously on
    ///     `queue`. Defaults to 2 seconds.
    ///   - block: The code to test.
    ///   - file: The file name to print with message if the assertion fails. The default is the file
    ///     where `XCTAssertPreconditionFailure(on:timeout:block:file:line:)` is called.
    ///   - line: The line number to print along with message if the assertion fails. The default is
    ///     the line number where `XCTAssertPreconditionFailure(on:timeout:block:file:line:)` is
    ///     called.
    public func XCTAssertFatalError(
      on queue: DispatchQueue = .global(qos: .userInitiated),
      timeout: TimeInterval = 2,
      block: @escaping () -> Void,
      file: StaticString = #filePath,
      line: UInt = #line
    ) {
      defer { FatalError.restore() }

      // Replace `fatalError` block to fulfill test expectation.
      let expectation = self.expectation(description: "Fatal error expectation")

      FatalError.replace { (_) in
        expectation.fulfill()
      }

      let failureSummary = FailureSummary(
        description: "Expected fatal error in block.", file: file, line: line)

      run(
        block,
        asynchronouslyOn: queue,
        waitingForExpectationsWithTimeout: timeout,
        recordingFailureAs: failureSummary
      )
    }

    // MARK: Helpers

    /// Encapsulates summary information about a test failure.
    private struct FailureSummary {
      let description: String
      let file: StaticString
      let line: UInt
    }

    /// Execute the given block asynchronously and waits for expectations.
    ///
    /// The block is executed on a different thread because calling `preconditionFailure` or
    /// `fatalError`  will block the calling thread *permanently* (they have return types of `Never`)
    /// and blocking the main thread would cause the test to never finish. Similar reasoning applies
    /// to why `async` is used (using `sync` would never return).
    ///
    /// If the expectations are never fulfilled, an issue
    private func run(
      _ block: @escaping () -> Void,
      asynchronouslyOn queue: DispatchQueue,
      waitingForExpectationsWithTimeout timeout: TimeInterval,
      recordingFailureAs failureSummary: FailureSummary
    ) {
      queue.async {
        block()
      }

      waitForExpectations(timeout: timeout) { error in
        guard let error = error else { return }

        // A custom issue is created and recorded to give a better error message than an
        // "unfulfilled expectation" message.

        let location = XCTSourceCodeLocation(
          filePath: failureSummary.file, lineNumber: failureSummary.line)
        let context = XCTSourceCodeContext(location: location)

        let issue = XCTIssue(
          type: .assertionFailure,
          compactDescription: failureSummary.description,
          detailedDescription: nil,
          sourceCodeContext: context,
          associatedError: Error.unfulfilledExpectations(error),
          attachments: []
        )

        self.record(issue)
      }
    }
  }

#endif  // canImpoty(XCTest)
