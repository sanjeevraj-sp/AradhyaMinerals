const express=require("express");
const Addadmin = require("./Admin/Addadmin");
const AdminLogin = require("./Auth/Adminlogin");
const Login = require("./Auth/Login");
const Register = require("./Auth/Register");
const Order = require("./Client/Order");
const CreateCan = require("./Can/CreateCan");
const EditProduct = require("./Can/UpdateCan");
const ViewOrder=require("./Admin/ViewOrder");
const Cart = require("./Admin/Cart");
const updateStatus = require("./Admin/UpdateStatus");
const CanDetails = require("./Client/CanDetails");
const OrderDetails = require("./Client/OrderDetails");
const FetchCan = require("./Can/FetchCan");
const UpdateCan = require("./Can/UpdateCan");
const SessionVerify = require("./Auth/SessionVerify");
const pincode = require("./Admin/Pincode");
const AddPinCode = require("./Admin/Addpincode");
const EditPinCode = require("./Admin/EditPinCode");
const Users = require("./Admin/Users");
const ViewAdmin = require("./Admin/ViewAdmin");
const RemoveAdmin = require("./Admin/RemoveAdmin");
const DashBoard = require("./Admin/DashBoard");
const UserVerify = require("./Auth/UserVerify");
const AddToCart = require("./Client/AddToCart");
const Mycart = require("./Client/Mycart");

const router=express.Router();

//client


router.route("/register").post(Register);
router.route("/login").post(Login)
router.route("/can").post(CanDetails)
router.route("/myorders").post(OrderDetails);
router.route("/placeorder").post(Order);
router.route("/getproducts").post(FetchCan);

router.route("/userverify").post(UserVerify)
router.route("/addtocart").post(AddToCart)
router.route("/mycart").post(Mycart)

//admin
router.route("/admin/update").post(updateStatus)


router.route("/admin/login").post(AdminLogin);
router.route("/admin/addproducts").post(CreateCan)
router.route("/admin/addadmin").post(Addadmin)
router.route("/admin/verify").post(SessionVerify)
router.route("/admin/edit").put(UpdateCan);
router.route("/admin/addpincode").post(AddPinCode)
router.route("/admin/editpincode").post(EditPinCode)
router.route("/admin/orders").post(ViewOrder);
router.route("/admin/cart").post(Cart)
router.route("/admin/users").get(Users);
router.route("/admin/viewadmin").get(ViewAdmin);
router.route("/admin/removeadmin").post(RemoveAdmin)
router.route("/admin/dashboard").get(DashBoard)

router.route("/pincode").get(pincode)
module.exports=router;