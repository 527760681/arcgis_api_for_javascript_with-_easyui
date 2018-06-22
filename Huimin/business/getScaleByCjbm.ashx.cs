using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Huimin.classD;

namespace Huimin.business
{
    /// <summary>
    /// getScaleByCjbm 的摘要说明
    /// </summary>
    public class getScaleByCjbm : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string json = "";
            if (context.Request["CJQYBM"] != null && context.Request["CJQYBM"] != "")
            {
                string cJQYBM = context.Request["CJQYBM"].ToString().Trim();
                LiuzhuanHelper liuzhuanHelper = new LiuzhuanHelper();
                int liuzhuanCount = liuzhuanHelper.GetCountByCjbm(cJQYBM);
                CJQYHelper cjqyHelper = new CJQYHelper();
                CJQY cjqy = cjqyHelper.GetData(cJQYBM);
                int cjqyCount = Convert.ToInt32( cjqy.NumFarmer);
                int wlzCount = cjqyCount - liuzhuanCount;
               
                json = "[{name:\"已流转户数\",value:" + liuzhuanCount + "},{name:\"未流转户数\",value:" + wlzCount + "}]";
            }
            context.Response.Write(json);
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