const router = require("express").Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
    res.render("user/register");
});

router.post("/register", async (req, res) => {
    const {
        email,
        username,
        password,
        rePassword,
    } = req.body;

    await userService.register({
        email,
        username,
        password,
        rePassword,
    });

    res.redirect("/user/login")
});

router.get("/login", (req, res) => {
    res.render("user/login");
});

router.post("/login", (req, res) => {
    const {
        email,
        password,
    } = req.body;
    res.redirect("/");
})

module.exports = router