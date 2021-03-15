# TestableAssertions

The Swift Standard Library comes with a handful of functions that are useful for asserting and terminating an application process when certain conditions aren't met; these include

- The `fatalError` family of functions.
- The `precondition` family of functions.

Often times you want to be able to test the code paths that lead to these functions being called, i.e. *make sure that the app crashes if we get into this illegal state* or *make sure a precondition assertion is raised if these inputs are passed to a function*.

Unfortunately, these functions are not **testable** - hitting a `fatalError` call or a `precondition`  failure will cause a test to fail. How then are you supposed to test that these methods are called? Enter `TestableAssertions`!

## Quick Start

In your code:

```swift
// SecureRequest.swift

import TestableAssertions

func makeSecureRequest(url: URL) {
  precondition(url.protocol == .https, "Attempting to make secure request with non-secure protocol!")
  
  guard !url.absoluteString.contains("objective-c") else {
    fatalError("We don't associate ourselves with such pain.")
  }
  
  // ...
}
```

Then in your tests:

```swift
// SecureRequestTests.swift

import TestableAssertions

func testRequestForInsecureURLRaisesPreconditionAssertion() throws {
  let insecureURL = try XCTUnwrap(URL(string: "http://www.api.com/"))
  XCTAssertPreconditionFailure {
    makeSecureRequest(url: insecureURL)
  }
}

func testRequestForObjectiveCURLRaisesFatalError() throws {
  let illegalURL = try XCTUnwrap(URL(string: "http://www.objective-c.com/"))
  XCTAssertFatalError {
    makeSecureRequest(url: insecureURL)
  }
}
```


## Installation

### CocoaPods

[CocoaPods](https://cocoapods.org) is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate Testabl into your Xcode project using CocoaPods, specify it in your `Podfile`:

```ruby
pod 'TestableAssertions', '~> 1.0'
```
### Swift Package Manager

The [Swift Package Manager](https://swift.org/package-manager/) is a tool for automating the distribution of Swift code and is integrated into the `swift` compiler. 

Once you have your Swift package set up, adding `TestableAssertions` as a dependency is as easy as adding it to the `dependencies` value of your `Package.swift`.

```swift
dependencies: [
  .package(url: "https://github.com/Alamofire/Alamofire.git", .upToNextMajor(from: "1.0.0"))
]
```

## Usage

### Production Code

This package provides the following global functions that shadow those of the Swift Standard Library:

- `fatalError(_:file:line:)`
- `precondition(_:_:file:line:)`
- `preconditionFailure(_:file:line:)`

To use them, import `TestableAssertions` into your code and use these functions as you normally would:

```swift
// SecureRequest.swift

import TestableAssertions

func makeSecureRequest(url: URL) {
  precondition(url.protocol == .https, "Attempting to make secure request with non-secure protocol!")
  
  guard !url.absoluteString.contains("objective-c") else {
    fatalError("We don't associate ourselves with such pain.")
  }
  
  // ...
}
```

By default, these functions just call through to their Swift counterparts, so when run in production environments there is no difference between the `TestableAssertion` functions and the `Swift` ones.

### Test Code

This package also provides two functions on `XCTestCase` that allow tests to assert whether the above methods are called:

- `XCTAssertFatalError(on:timeout:block:file:line:)`
- `XCTAssertPreconditionFailure(on:timeout:block:file:line:)`

```swift
// SecureRequestTests.swift

import TestableAssertions

class SecureRequestTests: XCTestCase {

  func testRequestForInsecureURLRaisesPreconditionAssertion() throws {
    let insecureURL = try XCTUnwrap(URL(string: "http://www.api.com/"))
    XCTAssertPreconditionFailure {
      makeSecureRequest(url: insecureURL)
    }
  }

  func testRequestForObjectiveCURLRaisesFatalError() throws {
    let illegalURL = try XCTUnwrap(URL(string: "http://www.objective-c.com/"))
    XCTAssertFatalError {
      makeSecureRequest(url: insecureURL)
    }
  }
}
```

#### Advanced Usage

Since `fatalError` and `preconditionFailure` have `Never` return types, the shadow implementations of these methods must indefinitely block the thread they are called. To solve this, `XCTAssertFatalError` and `XCTAssertPreconditionFailure` execute the given code *asynchronously* on queue that is not the main queue. By default, the global queue with `.userInitiated` QoS is used, and the assertions methods will
wait for 2 seconds for the async execution of the code block to complete. You can override these default values by passing in your own values to the `queue` and `timeout` parameters of the assertion methods, respectively. 


