import XCTest

import TestableAssertionsTests

var tests = [XCTestCaseEntry]()
tests += TestableAssertionsTests.allTests()
tests += TestableAssertionsFailureTests.allTests()
XCTMain(tests)
