import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'Simple Todo API with CRUD operations',
    },
  },
  apis: ['./src/routes/*.ts'], // Adjust this path to your route files
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

"/api/todos": {
  "get": {
    "summary": "Get all todos",
    "responses": {
      "200": {
        "description": "List of todos",
        "content": {
          "application/json": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Todo"
              }
            }
          }
        }
      }
    }
  }
}

