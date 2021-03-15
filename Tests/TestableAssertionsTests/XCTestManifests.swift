import XCTest

#if !canImport(ObjectiveC)
public func allTests() -> [XCTestCaseEntry] {
  return [
    testCase(TestableAssertionsTests.allTests),
    testCase(TestableAssertionsFailureTests.allTests),
  ]
}
#endif
