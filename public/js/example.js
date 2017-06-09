React.createElement('div', {className: 'ui items'},
  'Hello, friend! I am a basic React component.'
)


<div className='ui items'>
  Hello, friend! I am a basic React component.
</div>


React.createElement('div', {className: 'ui items'},
React.createElement('p', null, 'Hello, friend! I am a basic React component.')
)



<div className='ui items'>
  <p>
    Hello, friend! I am a basic React component.
  </p>
</div>


ReactDOM.render([what], [where]);


// Using Props

// When the up-vote button on each one of the Product components is clicked, 
// we expect it to update the votes attribute for that Product, increasing it by one.
// But the Product component can’t modify its votes. this.props is immutable.
// While the child can read its props, it can’t modify them. A child does not own its props.
// In our app, the parent component ProductList owns the props given to Product. 
// React favors the idea of one-way data flow. This means that data changes come from the “top” of 
// the app and are propagated “downwards” through its various components.


// Handling Click UpVote Event

// 1. Create handleProductUpVote function in ProductList

class ProductList extends React.Component {
  handleProductUpVote(productId) {
    console.log(productId + ' was upvoted.');
}

// 2. Next, we’ll pass this function down as a prop to each Product component. 
// We’ll name the prop onVote:

// Note that we pass prop in ProductList which is the parent to Product

const productComponents = products.map((product) => (
      <Product
			key={'product-' + product.id}
			id={product.id}
			title={product.title} description={product.description} url={product.url}
			votes={product.votes} submitterAvatarUrl={product.submitterAvatarUrl} 
			productImageUrl={product.productImageUrl} 
			onVote={this.handleProductUpVote}
		/> ));

// 3. We can now access this function inside Product via this.props.onVote.
// Let’s write a function inside Product that calls this new prop-function. We’ll name the function
// handleUpVote():

// Inside `Product`
handleUpVote() {
    this.props.onVote(this.props.id);
}


// We invoke the prop-function this.props.onVote with the id of the product.
// Now, we just need to call this function every time the user clicks the caret icon.

// Inside `render` for Product` 
<div className='middle aligned content'>
  <div className='header'>
    <a onClick={this.handleUpVote}>
      <i className='large caret up icon' />
    </a>
    {this.props.votes}
  </div>

// 4. Binding custom component methods

// we want this inside handleUpVote() to reference the component, just like it does inside render()
// For the render() function, React binds this to the component for us.
// React specifies a default set of special API methods. render() is one such method.
// As we’ll see at the end of the chapter, componentDidMount() is another.

// So, any time we define our own custom component methods,
// we have to manually bind this to the component ourselves

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
}


// constructor() is a special function in a JavaScript class.
// JavaScript invokes constructor() whenever an object is created via a class.
// React invokes constructor() first thing when initializing our component.
// React invokes constructor() with the component’s props.

class MyReactComponent extends React.Component { constructor(props) {
super(props); // always call this first
    // custom method bindings here
this.someFunction = this.someFunction.bind(this); }
}


// 1. User clicks the up-vote icon.
// 2. ReactinvokesProductcomponent’shandleUpVote
// 3. handleUpVote invokes its prop onVote. This function lives inside the parent ProductList and
// logs a message to the console.






