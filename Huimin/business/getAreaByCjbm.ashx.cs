using Huimin.classD;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Huimin.business
{
    /// <summary>
    /// getAreaByCjbm 的摘要说明
    /// </summary>
    public class getAreaByCjbm : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string cJQYBM = context.Request["CJQYBM"].ToString().Trim();
            LiuzhuanHelper liuzhuanHelper = new LiuzhuanHelper();
            float liuzhuanArea = liuzhuanHelper.GetAreaByCjbm(cJQYBM);
            CJQYHelper cjqyHelper = new CJQYHelper();
            CJQY cjqy = cjqyHelper.GetData(cJQYBM);
            float cjqyArea = Convert.ToSingle(cjqy.CountArea);
            float wlzArea = cjqyArea - liuzhuanArea;
            string json = "[{name:\"已流转面积\",value:" + liuzhuanArea + "},{name:\"未流转面积\",value:" + wlzArea + "}]";
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