// const orderSchema = {
//                     identifier: 'purchase',
//                     label: 'Purchase',
//                     schemaType: 'document',
//                     properties: [
//                       {
//                         identifier: 'givenName',
//                         label: 'Given Name',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'familyName',
//                         label: 'Family Name',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'location',
//                         label: 'Location',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'town',
//                         label: 'Town',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'postalCode',
//                         label: 'Postal Code',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'contactNumber',
//                         label: 'Contact Number',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'contactEmail',
//                         label: 'Contact Email',
//                         schemaType: 'text',
//                       },
//                       {
//                         identifier: 'items',
//                         label: 'Items',
//                         schemaType: 'list',
//                         of: [{ schemaType: 'reference', to: { schemaType: 'item' } }],
//                       },
//                       {
//                         identifier: 'grandTotal',
//                         label: 'Grand Total',
//                         schemaType: 'decimal',
//                       },
//                       {
//                         identifier: 'reduction',
//                         label: 'Reduction',
//                         schemaType: 'decimal',
//                       },
//                       {
//                         identifier: 'purchaseDate',
//                         label: 'Purchase Date',
//                         schemaType: 'timestamp',
//                       },
//                       {
//                         identifier: 'currentStatus',
//                         label: 'Current Status',
//                         schemaType: 'text',
//                         settings: {
//                           choices: [
//                             { label: 'Awaiting', value: 'awaiting' },
//                             { label: 'Completed', value: 'completed' },
//                             { label: 'Shipped', value: 'shipped' },
//                           ],
//                           display: 'radio', // Can be changed to 'select' for a dropdown
//                         },
//                         defaultValue: 'awaiting', // Initial value
//                       },
//                     ],
//                   };
                  
//                   export default orderSchema;





// sanity/schemas/order.js
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    },
    {
      name: 'total',
      title: 'Total Amount',
      type: 'number',
    }, 
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    },
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Success', value: 'success' },
          { title: 'Dispatch', value: 'dispatch' },
        ],
        layout: 'radio', // Optionally, change to 'dropdown' if you prefer a dropdown
      },
      initialValue: 'pending', // Default value
    },
  ],
};