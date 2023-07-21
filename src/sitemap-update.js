const { log } = require("console");
const fs = require("fs");
const convert = require("xml-js");
const moment = require("moment");
const baseUrl = "http://demo.vidamms.com/#/";
const untrackedUrlsList = [
  baseUrl + "",
  baseUrl + "anasayfa",
  baseUrl + "hakkimizda",
  baseUrl + "ozelllikler",
  baseUrl + "maaliyet",
  baseUrl + "destek",
  baseUrl + "referanslar",
  baseUrl + "blog",
  baseUrl + "iletisim",
  baseUrl + "demo",
  baseUrl + "guvenlik",
  baseUrl + "politika",
  baseUrl + "blog/cmms-nedir",
  baseUrl + "blog/altyapi-bakimi-nedir-neden-önemlidir",
  baseUrl + "blog/durum-bazli-bakim-nedir",
  baseUrl + "blog/periyodik-bakim-nedir",
  baseUrl + "blog/üretimde-yeni-trendler",
  baseUrl + "blog/toplam-verimli-bakim",
  baseUrl + "blog/hata-türleri-ve-etkileri-analizi",
  baseUrl + "blog/güvenilirlik-merkezli-bakim-yaklasimi",
  baseUrl + "blog/teknolojinin-bakim-yönetim-etkisi",
  baseUrl + "blog/planli-bakimlarla-üretimde-verimi-arttirmak",
  baseUrl + "blog/bakim-takip-programi",
  baseUrl + "blog/makinelerinizin-ideal-bakim-periyotlari-ne-olmalidir",
  baseUrl + "blog/bakim-yönetim-yazilimi-nedir",
  baseUrl + "blog/kestirimci-bakim-nedir",
  baseUrl + "blog/ariza-üretim-üzerinde-nasil-riskler-oluşturur",
  baseUrl +
    "blog/vida-bakim-yönetim-uygulamasi-ile-maliyetleri-nasıl-düşürürsüzünüz",

  baseUrl + "en",
  baseUrl + "en/about",
  baseUrl + "en/features",
  baseUrl + "en/cost",
  baseUrl + "en/support",
  baseUrl + "en/references",
  baseUrl + "en/blog",
  baseUrl + "en/blog/what-is-cmms",
  baseUrl + "en/blog/what-is-ınfrastructure-maintenance-why-is-it-important",
  baseUrl + "en/blog/what-is-condition-based-maintenance",
  baseUrl + "en/blog/what-is-periodic-maintenance",
  baseUrl + "en/blog/new-trends-in-production",
  baseUrl + "en/blog/total-efficient-maintenance",
  baseUrl + "en/blog/failure-modes-and-effects-analysis",
  baseUrl + "en/blog/reliability-centered-maintenance-approach",
  baseUrl + "en/blog/technology-maintenance-management-effect",
  baseUrl +
    "en/blog/to-increase-efficiency-in-production-with-planned-maintenances",
  baseUrl + "en/blog/maintenance-follow-up-program",
  baseUrl +
    "en/blog/what-the-ideal-maintenance-periods-should-be-your-machines",
  baseUrl + "en/blog/what-is-maintenance-management-software",
  baseUrl + "en/blog/what-is-predictive-maintenance",
  baseUrl + "en/blog/how-risks-creates-on-defect-production",
  baseUrl +
    "en/blog/screw-maintenance-management-application-how-to-lower-costs",
  baseUrl + "en/contact",
  baseUrl + "en/demo",
  baseUrl + "en/privacy",
  baseUrl + "en/policy",
  baseUrl + "en/support",
  baseUrl + "en/support",
];
const options = { compact: true, ignoreComment: true, spaces: 4 };

const filterUniqueURLs = () => {
  fs.readFile("src/sitemap.xml", (err, data) => {
    if (data) {
      const existingSitemapList = JSON.parse(convert.xml2json(data, options));
      if (!existingSitemapList.urlset.url) {
        existingSitemapList.urlset.url = [];
      } else if (!Array.isArray(existingSitemapList.urlset.url)) {
        existingSitemapList.urlset.url = [existingSitemapList.urlset.url];
      }

      let existingSitemapURLStringList = [];

      if (
        existingSitemapList.urlset &&
        existingSitemapList.urlset.url &&
        existingSitemapList.urlset.url.length
      ) {
        existingSitemapURLStringList = existingSitemapList.urlset.url.map(
          (ele) => ele.loc._text
        );
      }
      untrackedUrlsList.forEach((ele) => {
        if (existingSitemapURLStringList.indexOf(ele) === -1) {
          existingSitemapList.urlset.url.push({
            loc: {
              _text: ele,
            },
            changefreq: {
              _text: "monthly",
            },
            priority: {
              _text: 0.8,
            },
            lastmod: {
              _text: moment(new Date()).format("YYYY-MM-DD"),
            },
          });
        }
      });

      createSitemapFile(existingSitemapList);
    }
  });
};

const createSitemapFile = (list) => {
  const finalXML = convert.json2xml(list, { ...options, xmlDeclaration: true });
  saveNewSitemap(finalXML);
};

const saveNewSitemap = (xmltext) => {
  fs.writeFile("src/sitemap.xml", xmltext, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};

filterUniqueURLs();
