using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Huimin.classD
{
    public class Liuzhuan
    {
        //1.地块编码
        private string dKBM;
        public string DKBM
        {
            get { return dKBM; }
            set { dKBM = value; }
        }
      
        //2.地块类别
        private string dKLB;

        public string DKLB
        {
            get { return dKLB; }
            set { dKLB = value; }
        }

        //3.地力等级
        private string dLDJ;

        public string DLDJ
        {
            get { return dLDJ; }
            set { dLDJ = value; }
        }
        //4.土地用途
        private string tDYT;

        public string TDYT
        {
            get { return tDYT; }
            set { tDYT = value; }
        }
        //5.承包面积
        private string cBMJ;

        public string CBMJ
        {
            get { return cBMJ; }
            set { cBMJ = value; }
        }
        //6.实测面积
        private string sCMJ;

        public string SCMJ
        {
            get { return sCMJ; }
            set { sCMJ = value; }
        }
        //7.发包方
        private string fBFBM;

        public string FBFBM
        {
            get { return fBFBM; }
            set { fBFBM = value; }
        }
        //8.转出方编码
        private string zCFBM;

        public string ZCFBM
        {
            get { return zCFBM; }
            set { zCFBM = value; }
        }
        //9.承包经营权证编号
        private string cBJYQZBM;

        public string CBJYQZBM
        {
            get { return cBJYQZBM; }
            set { cBJYQZBM = value; }
        }
        //10.流转方式
        private string lZFS;

        public string LZFS
        {
            get { return lZFS; }
            set { lZFS = value; }
        }
       
        //11.流转期限开始日期
        private string lZQXKSRQ;

        public string LZQXKSRQ
        {
            get { return lZQXKSRQ; }
            set { lZQXKSRQ = value; }
        }
        //12.流转期限结束日期
        private string lZQXJSRQ;
        public string LZQXJSRQ
        {
            get { return lZQXJSRQ; }
            set { lZQXJSRQ = value; }
        }
        //13.流转期限
        private string lZQX;

        public string LZQX
        {
            get { return lZQX; }
            set { lZQX = value; }
        }
        //14.流转价格
        private string lZJG;

        public string LZJG
        {
            get { return lZJG; }
            set { lZJG = value; }
        }
        //15.合同签订日期
        private string hTQDRQ;

        public string HTQDRQ
        {
            get { return hTQDRQ; }
            set { hTQDRQ = value; }
        }
        //16.流转合同编码
        private string lZHTBM;

        public string LZHTBM
        {
            get { return lZHTBM; }
            set { lZHTBM = value; }
        }
        //17.受让方编码
        private string sRFBM;

        public string SRFBM
        {
            get { return sRFBM; }
            set { sRFBM = value; }
        }
        //18.录入员
        private string reporter;

        public string Reporter
        {
            get { return reporter; }
            set { reporter = value; }
        }

        





    }
}