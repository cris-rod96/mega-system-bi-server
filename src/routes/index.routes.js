import { Router } from "express";
import userRouter from "./user/user.route.js";
import categoryRouter from "./category/category.route.js";
import codeRouter from "./code/code.route.js";
import authRouter from "./auth/auth.route.js";
import productRouter from "./product/product.route.js";
import offerRouter from "./offer/offer.route.js";
import serviceRouter from "./service/service.route.js";
import buyRouter from "./buy/buy.route.js";
import favoriteRouter from "./favorite/favorite.route.js";
import cartRouter from "./cart/cart.route.js";
import residencyRouter from "./residency/residency.route.js";
import voucherRouter from "./voucher/voucher.route.js";
import appointmentRouter from "./appointment/appointment.route.js";
import viewRouter from "./view/view.route.js";
import reviewRouter from "./review/review.route.js";
const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/categories", categoryRouter);
rootRouter.use("/codes", codeRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/offers", offerRouter);
rootRouter.use("/services", serviceRouter);
rootRouter.use("/buys", buyRouter);
rootRouter.use("/favorites", favoriteRouter);
rootRouter.use("/carts", cartRouter);
rootRouter.use("/residencies", residencyRouter);
rootRouter.use("/vouchers", voucherRouter);
rootRouter.use("/appointments", appointmentRouter);
rootRouter.use("/views", viewRouter);
rootRouter.use("/reviews", reviewRouter);
export default rootRouter;
