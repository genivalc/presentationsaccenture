module.exports = app => {
   const constroller = app.controllers.customerWallets;

   app.route('/api/v1/customer-wallets').get(constroller.listCustomerWallets)
}