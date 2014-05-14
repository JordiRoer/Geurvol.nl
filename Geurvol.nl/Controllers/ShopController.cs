using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Geurvol.nl.Controllers
{
    public class ShopController : Controller
    {

        public ActionResult Index(int type)
        {
            return View();
        }
    }
}