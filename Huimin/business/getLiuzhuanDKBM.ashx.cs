using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Huimin.classD;
namespace Huimin.business
{
    /// <summary>
    /// getLiuzhuanDKBM 的摘要说明
    /// </summary>
    public class getLiuzhuanDKBM : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            LiuzhuanHelper liuzhuanHelper = new LiuzhuanHelper();
           
            context.Response.Write( liuzhuanHelper.GetDKBMLArray());
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}