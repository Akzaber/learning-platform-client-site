import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="text-white mb-4">
        <p className="bg-sky-600 text-xl font-semibold p-4 rounded mb-2">
          What is Cors?
        </p>
        <p className="bg-black text-lg font-semibold p-4 rounded">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources.
        </p>
      </div>
      <div className="text-white mb-4">
        <p className="bg-sky-600 text-xl font-semibold p-4 rounded mb-2">
          Why are you using firebase? what other options do you have to
          implement authentication.
        </p>
        <p className="bg-black text-lg font-semibold p-4 rounded">
          Google Firebase is an application development platform that allows
          developers to create iOS, Android, and Web apps. Google Firebase
          offers many features that pitch it as the go-to backend development
          tool for web and mobile apps. It reduces development workload and
          time. And it's a perfect prototyping tool. <br />
          There are several authentication options available to authenticate
          users and provide access to resources.
          <li>Token Authentication</li>
          <li>Standard Authentication</li>
          <li>Multi-Factor Authentication (MFA)</li>
          <li>Passwordless Authentication</li>
          <li> Social Authentication</li>
        </p>
      </div>
      <div className="text-white mb-4">
        <p className="bg-sky-600 text-xl font-semibold p-4 rounded mb-2">
          How does the private route work?
        </p>
        <p className="bg-black text-lg font-semibold p-4 rounded">
          Private Routes in React Router also called Protected Routes require a
          user being authorized to visit a route. So if a user is not authorized
          for a specific page, they cannot access it. The most common example is
          authentication in a React application where a user can only access the
          protected pages when they are authorized which means in this case
          being authenticated. Authorization goes beyond authentication though.
        </p>
      </div>
      <div className="text-white mb-4">
        <p className="bg-sky-600 text-xl font-semibold p-4 rounded mb-2">
          What is node? how does node work?
        </p>
        <p className="bg-black text-lg font-semibold p-4 rounded">
          Node is an asynchronous event-driven JavaScript runtime. Here easily
          building fast and scalable network applications. Node.js uses an
          event-driven, non-blocking I/O model that makes it lightweight and
          efficient, perfect for data-intensive real-time applications that run
          across distributed devices. <br />
          Node.js accepts the request from the clients and sends the response,
          while working with the request node.js handles them with a single
          thread. Node.js basically works on two concept.
          <li>Asynchronous</li>
          <li>Non-blocking I/O</li>
        </p>
      </div>
    </div>
  );
};

export default Blog;
