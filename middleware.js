const Listing = require("./models/listings");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { ListingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in...");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    console.log(req.body.listing);
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not owner of this listing...");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    let currUser = res.locals.currUser;
    if (!(currUser && currUser._id.equals(review.author._id))) {
        req.flash("error", "You are not author of this review...");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.validateListing = (req, res, next) => {
    let { error } = ListingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};