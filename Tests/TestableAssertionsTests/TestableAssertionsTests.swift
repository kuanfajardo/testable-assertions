import XCTest
@testable import TestableAssertions

final class TestableAssertionsTests: XCTestCase {

  func testPreconditionFailure() throws {
    XCTAssertPreconditionFailure {
      preconditionFailure("Test failure!")
    }
  }

  func testPreconditionFailureFromCondition() {
    XCTAssertPreconditionFailure {
      precondition(false, "Test failure!")
    }
  }

  func testFatalError() {
    XCTAssertFatalError {
      fatalError("Test failure!")
    }
  }

  static var allTests = [
    ("testPreconditionFailure", testPreconditionFailure),
    ("testPreconditionFailureFromCondition", testPreconditionFailureFromCondition),
    ("testFatalError", testFatalError),
  ]
}


final class TestableAssertionsFailureTests: XCTestCase {

  /// A test case run that causes a test case to fail if there *hasn't* been a `TestableAssertions`
  /// error recorded during the run, and pass if there has been at least one `TestableAssertions`
  /// error recorded during the test run.
  class ExpectedTestableAssertionsErrorTestRun: XCTestCaseRun {

    /// Whether an assertion failure has been recorded during the test run.
    private var hasFailed = false

    /// Intercept test case assertion failures to
    ///   (1) avoid failing the test case when an assertion is raised
    ///   (2) record that the test has failed for later analysis (see `stop()` below)
    override func record(_ issue: XCTIssue) {
      if issue.associatedError is TestableAssertions.Error {
        hasFailed = true
      } else {
        super.record(issue)
      }
    }

    /// When the test case finishes, make sure that there has been an assertion failure in the
    /// test (see `record(_:)`). If there hasn't been, record an issue to cause test to fail.
    override func stop() {
      defer {
        hasFailed = false
        super.stop()
      }

      guard hasFailed else {
        let issue = XCTIssue(
          type: .assertionFailure, compactDescription: "Expected at least one testable assertion to fail.")
        super.record(issue)
        return
      }
    }
  }

  override var testRunClass: AnyClass? { ExpectedTestableAssertionsErrorTestRun.self }

  // MARK: Tests

  func testNoPreconditionFailureFails() throws {
    XCTAssertPreconditionFailure {
      // No `preconditionFailure` means test should assert (causing test to pass).
    }
  }

  func testNoPreconditionFailureFromConditionFails() {
    XCTAssertPreconditionFailure {
      // No `precondition` failure means test should assert (causing test to pass).
    }
  }

  func testNoFatalErrorFails() {
    XCTAssertFatalError {
      // No `fatalError` means test should assert (causing test to pass).
    }
  }

  static var allTests = [
    ("testNoPreconditionFailureFails", testNoPreconditionFailureFails),
    ("testNoPreconditionFailureFromConditionFails", testNoPreconditionFailureFromConditionFails),
    ("testNoFatalErrorFails", testNoFatalErrorFails),
  ]
}
