import React from "react";

const Blog = () => {
  return (
    <section>
      <h1 className="text-center mt-10 font-bold italic text-4xl md:text-5xl text-blue-900 underline decoration-blue-100 decoration-wavy underline-offset-8">
        Question & Answer
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 mb-10 text-justify">
          <div className="card md:w-11/12 w-96 mx-auto bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h2 className="card-title">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p className="text-gray-500">
                An access token is a credential that is used to authenticate and
                authorize access to protected resources or APIs. It is typically
                short-lived and has an expiration time. <br />A refresh token is
                a long-lived token that is used to obtain a new access token
                without the need for the user to re-enter their credentials. It
                is typically issued alongside an access token during the initial
                authentication process. <br />
                They work can be summarized as follows: <br />
                1.User Authentication 2.Access Token Usage 3.Access Token
                Expiration 4.Refresh Token Usage 5.Token Refresh Process <br />
                Access tokens are sent with each request, they need to be easily
                accessible. It's common to store them in memory or in browser
                storage mechanisms like local storage or session storage. <br />
                Refresh tokens are long-lived and need to be securely stored to
                prevent unauthorized access. They should never be accessible to
                JavaScript or client-side code to mitigate the risk of theft.
              </p>
            </div>
          </div>
          <div className="card md:w-11/12 w-96 mx-auto bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
              <p className="text-gray-500">
                SQL (Structured Query Language) and NoSQL (Not Only SQL)
                databases are two different types of database management systems
                with distinct characteristics. <br />
                SQL: SQL databases follow a rigid, predefined schema based on
                tables, columns, and rows. They enforce structured data with
                relationships between tables using foreign keys. SQL databases
                typically scale vertically, meaning they handle increased loads
                by adding more resources to a single server. SQL databases use
                the standardized SQL language for defining and manipulating
                data. SQL provides a rich set of declarative query capabilities
                for complex joins, aggregations, and filtering.
                <br />
                NoSQL: NoSQL databases allow flexible and dynamic schemas, often
                referred to as "schema-less." They can handle unstructured,
                semi-structured, or structured data. NoSQL databases typically
                use various data models such as key-value pairs, documents,
                columnar, or graph-based structures. NoSQL databases are
                designed for horizontal scalability, meaning they distribute
                data across multiple servers or clusters. NoSQL databases often
                use non-SQL query languages specific to their data model.
              </p>
            </div>
          </div>
          <div className="card md:w-11/12 w-96 mx-auto bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h2 className="card-title">
                What is express js? What is Nest JS?
              </h2>
              <p className="text-gray-500">
                Express.js is a minimalistic and flexible web application
                framework for Node.js. It provides a straightforward and
                unopinionated approach to building web servers and APIs.
                Express.js is known for its simplicity, ease of use, and a wide
                range of middleware and extensions available in its ecosystem.
                It allows developers to handle HTTP requests and responses,
                define routes, and implement middleware for handling various
                aspects of the request-response cycle. Express.js is suitable
                for small to medium-sized applications and provides the
                flexibility to customize and structure your application based on
                your specific needs. <br /> Nest.js is a progressive and
                opinionated web framework for building efficient and scalable
                server-side applications. It is built on top of Express.js and
                enhances it with additional features and a modular architecture
                inspired by Angular. Nest.js leverages TypeScript as its primary
                programming language, allowing for strong typing, dependency
                injection, and extensive tooling support. It follows a modular
                structure with decorators and decorators-based configuration,
                making it easy to organize and test code. Nest.js is suitable
                for building complex enterprise applications and APIs, with a
                focus on scalability, maintainability, and developer
                productivity.
              </p>
            </div>
          </div>
          <div className="card md:w-11/12 w-96 mx-auto bg-base-100 shadow-xl my-5">
            <div className="card-body">
              <h2 className="card-title">
                What is MongoDB aggregate and how does it work?
              </h2>
              <p className="text-gray-500">
                MongoDB's aggregation framework is a powerful tool for
                performing complex data analysis and transformation operations
                on the data stored in a MongoDB database. It allows you to
                process and manipulate data using a pipeline of stages,
                providing capabilities for filtering, grouping, sorting,
                joining, and performing calculations. <br /> The aggregation
                framework operates on a collection of documents and produces
                computed results based on the data in those documents. It takes
                input documents and passes them through a series of stages,
                where each stage performs a specific operation on the input and
                produces an output that serves as the input for the next stage.
                The output of the final stage is the result of the aggregation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
