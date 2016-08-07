Compatibility: Swift 2.2

Some sites are doing a great job, but most fail to follow up with the frequent changes and the tons of new stuff introduced by Apple on a regular basis.
For the very same reason, I believe that most printed books covering computer technology in general, are out of date by the time they leave the print shop.

**Note:** Methods are functions that are associated with a particular type like classes, structures and enumerations.

The ordered list of typed values that a function takes as input (defined in the function’s declaration) are known as **parameters**.
When you call a function you pass it an ordered list of input values that match the function’s parameter list.
This other list is known as **arguments**. Again for sake of simplicity I will refer to both lists as  “parameters”.

If you are familiar with other languages, you might find that the way functions are defined and called in Swift are verbose. If you like verbosity,
you will appreciate how it improves the clarity and readability of your code,
and if you don’t … well there is absolutely nothing I can do about it. Seriously, I believe it is a good concept.

## The Default Syntax

<pre>
  <code class="swift">
  func totalPaidForItemWithName(
     name: String,
     withItemPrice price: Double,
     numberOfItemsOrdered count: Int) -> String {

     let total = price * Double(count)
     return("\(name) \(count)*\(price) $\(total)")
  }

  print(
     totalPaidForItemWithName("Books", withItemPrice: 10.99, numberOfItemsOrdered: 5)
  )
  </code>
</pre>

The function above has three parameters, and called from the  print statement returns the following string:

<code class="snippet__base-code">Books   5*10.99   $54.95</code>

Some sites are doing a great job, but most fail to follow up with the frequent changes and the tons of new stuff introduced by Apple on a regular basis.
For the very same reason, I believe that most printed books covering computer technology in general, are out of date by the time they leave the print shop.

Function parameters will always have a **local name** and optionally an **external name**.

The **local name** is for use within the function’s body (like in other languages). In the example above the local names are name, price and count.

The **external name** is used to label arguments passed to a function call. In the example above the external names are
<code class="snippet__base-code">withItemPrice</code> and <code class="snippet__base-code">numberOfItemsOrdered</code>.
As you can see the first parameter does NOT have an external name, and accordingly in the function call “Books” is not preceded by a label.

To summarize the default syntax:

* The first parameter does not have an external name because its name is encapsulated in the function’s name, accordingly in the function call it does not have a label.
  This is a convention adopted by Apple back in Objective-C. Normally this can be achieved by …. as in the example above.

* The second and third parameter (generally any subsequent parameter) have an external name, which you have to use as the label for this parameter in the function call.

* Looking at a function call one can easily understand, what the function does and what input parameters it expects.
It is almost like speaking English. In the example above, you can read the function call like this:
“Give me the total paid for the item named Books that has an item price of 10.99 and 5 items has been ordered”.

* By providing external names for the second and any subsequent parameter, you can use shorter names and names more intuitive programming wise in the function’s implementation.

This is the syntax recommended by Apple and it is widely used in its APIs.

**Note:** In case you are concerned about the amount of typing you have to do in view of this verbosity, Xcode’s autocomplete comes to your rescue.
When you write a function call you select the relevant template suggested by autocomplete and you only need to tab through the template to fill in the parameter values.

![Xcode Autocomplete in action](/images/post/image-post-1.jpg "Xcode Autocomplete in action")

However you might deviate from this default syntax in the functions you write. Following you will find some typical scenarios

## I want to use the same term for the local and external names

<pre>
  <code class="swift">
  func totalPaidForItemWithName(
     name: String,
     price: Double,
     count: Int) -> String {

     let total = price * Double(count)
     return("\(name)   \(count)*\(price)   $\(total)")
  }
  </code>
</pre>

For the second and subsequent parameter you just omit the external name from the functions definition,
the local name automatically becomes the external name as well, which you must specify as the label in the function call.

## I want to use an external name for the first parameter

There should be a very good reason to do this, but you are the boss and you should know better.

<pre>
  <code class="swift">
  func totalPaidForItemWithName(
     externalName name: String,
     price: Double,
     count: Int) -> String {

     let total = price * Double(count)
     return("\(name)   \(count)*\(price)   $\(total)")
  }

  print(
     totalPaidForItemWithName(externalName: "Books", price: 10.99, count: 5)
  )
  </code>
</pre>

You just add an external name in the function’s definition, which of course you must specify as a label in the function call.
When you want to use the same term for the local and external names of the first parameter you just an external name with the same value as the local name

<pre>
  <code class="swift">
  func totalPaidForItemWithName(
     name name: String,
     price: Double,
     count: Int) -> String {

     let total = price * Double(count)
     return("\(name)   \(count)*\(price)   $\(total)")
  }

  print(
     totalPaidForItemWithName(name: "Books", price: 10.99, count: 5)
  )
  </code>
</pre>

## I want to omit external names for the second or any subsequent parameter

<pre>
  <code class="swift">
  func totalPaidForItemWithName(
     name: String,
     _ price: Double,
     _ count: Int) -> String {

     let total = price * Double(count)
     return("\(name)   \(count)*\(price)   $\(total)")
  }

  print(
     totalPaidForItemWithName("Books", 10.99, 5)
  )
  </code>
</pre>

## The name of a Function

The name of a function is the combination of the function name (the name that precedes the parentheses in the function’s definition)
followed by the external names of all its parameters separated by “:” inside parentheses. When a parameter does not have an external name, you use an “_” instead.

So taking all the examples above the function names (corresponding to the order they appear) are as follows:

<pre>
  <code class="swift">
  totalPaidForItemWithName(_:withItemPrice:numberOfItemsOrdered)

  totalPaidForItemWithName(_:price:count:)

  totalPaidForItemWithName(externalName:price:count:)

  totalPaidForItemWithName(name:price:count:)

  totalPaidForItemWithName(_:_:_:)
  </code>
</pre>

You will see this notation in Apple’s documentation and in Xcode when you open the methods drop down menu at the top of an Editor pane:
