const ShortUrl = require('../Models/shortUrl');

const home = async (req, res) => {
  try {
    const shortUrls = await ShortUrl.find();
    res.render('index', { shortUrls });
  } catch (error) {
    console.error("Error loading homepage:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const post_Fullurl = async (req, res) => {
  try {
    const Fullurl = req.body.fullUrl;
    const duplicate = await ShortUrl.findOne({ originalUrl: Fullurl });

    if (duplicate) {
      return res.sendStatus(409);
    }

    await ShortUrl.create({ originalUrl: Fullurl });
    res.redirect('/');
  } catch (error) {
    console.error("Error shortening URL:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const convertshorturltoFull = async (req, res) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short_code: req.params.code });

    if (shortUrl === null) {
      return res.status(404).json({ message: "Invalid URL" });
    }

    res.redirect(shortUrl.originalUrl);
  } catch (error) {
    console.error("Redirect failed:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { home, post_Fullurl, convertshorturltoFull };
