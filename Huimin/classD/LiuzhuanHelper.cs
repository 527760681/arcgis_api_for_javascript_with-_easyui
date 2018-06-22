using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.OleDb;
using Newtonsoft.Json;



namespace Huimin.classD
{
    public class LiuzhuanHelper
    {
        OleDbConnection con = null;
        public LiuzhuanHelper()
        {
            con = new OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("../dataBase/huimin.mdb") + ";Persist Security Info=False");
        }

        public string GetDataByDKBM(string dKBM)
        {
            string sql = @"select DKBM,DKLB,DLDJ,TDYT,CBMJ,SCMJ,FBFBM,ZCFBM,CBJYQZBM,LZFS,LZQXKSRQ,LZQXJSRQ,LZQX,LZJG,HTQDRQ,LZHTBM,SRFBM,Reporter FROM LiuZhuanTable WHERE DKBM = @DKBM";
            OleDbParameter oledbPara = new OleDbParameter(" @DKBM", dKBM);
            List<Liuzhuan> list = GetData(sql, oledbPara);
            string jsonData = JsonConvert.SerializeObject(list);
            return jsonData;
        }
        public string GetDataByReporter(string reporter)
        {
            string sql = @"select DKBM,DKLB,DLDJ,TDYT,CBMJ,SCMJ,FBFBM,ZCFBM,CBJYQZBM,LZFS,LZQXKSRQ,LZQXJSRQ,LZQX,LZJG,HTQDRQ,LZHTBM,SRFBM,Reporter FROM LiuZhuanTable WHERE Reporter = @Reporter";
            OleDbParameter oledbPara = new OleDbParameter(" @Reporter", reporter);
            List<Liuzhuan> list = GetData(sql, oledbPara);
            string jsonData = JsonConvert.SerializeObject(list);
            return jsonData;
        }

        public string GetDKBMLArray()
        {
            string reDKBM = "";
            string sql = @"select DKBM FROM LiuZhuanTable";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = sql;
            con.Open();
            OleDbDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                if (reader["DKBM"].ToString() != "0")
                {
                    reDKBM += "" + reader["DKBM"].ToString() + ",";
                }
            }
            con.Close();
            string ee = reDKBM.Substring(0, reDKBM.Length - 1);
            return ee;
        }



        public List<Liuzhuan> GetData(string sql, OleDbParameter oledbParameter)
        {
            List<Liuzhuan> liuZhuanData = new List<Liuzhuan>();
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.Parameters.Add(oledbParameter);
            cmd.CommandText = sql;
            con.Open();
            OleDbDataReader reader = cmd.ExecuteReader();
            Liuzhuan liuzhuan = new Liuzhuan();
            if (!reader.HasRows)
            {
                liuzhuan = null;
            }
            else
            {
                while (reader.Read())
                {
                    liuZhuanData.Add(new Liuzhuan()
                    {
                        DKBM = reader["DKBM"].ToString(),
                        DKLB = reader["DKLB"].ToString(),
                        DLDJ = reader["DLDJ"].ToString(),
                        TDYT = reader["TDYT"].ToString(),
                        CBMJ = reader["CBMJ"].ToString(),
                        SCMJ = reader["SCMJ"].ToString(),
                        FBFBM = reader["FBFBM"].ToString(),
                        ZCFBM = reader["ZCFBM"].ToString(),
                        CBJYQZBM = reader["CBJYQZBM"].ToString(),
                        LZFS = reader["LZFS"].ToString(),
                        LZQXKSRQ = reader["LZQXKSRQ"].ToString(),
                        LZQXJSRQ = reader["LZQXJSRQ"].ToString(),
                        LZQX = reader["LZQX"].ToString(),
                        LZJG = reader["LZJG"].ToString(),
                        HTQDRQ = reader["HTQDRQ"].ToString(),
                        LZHTBM = reader["LZHTBM"].ToString(),
                        SRFBM = reader["SRFBM"].ToString(),
                        Reporter = reader["Reporter"].ToString()

                    });

                }
            }
            con.Close();
            return liuZhuanData;
        }

        public List<Liuzhuan> GetData(string sql)
        {
            List<Liuzhuan> liuZhuanData = new List<Liuzhuan>();
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = sql;
            con.Open();
            OleDbDataReader reader = cmd.ExecuteReader();
            Liuzhuan liuzhuan = new Liuzhuan();
            if (!reader.HasRows)
            {
                liuzhuan = null;
            }
            else
            {
                while (reader.Read())
                {
                    liuzhuan.DKBM = reader["DKBM"].ToString();
                    liuzhuan.DKLB = reader["DKLB"].ToString();
                    liuzhuan.DLDJ = reader["DLDJ"].ToString();
                    liuzhuan.TDYT = reader["TDYT"].ToString();
                    liuzhuan.CBMJ = reader["CBMJ"].ToString();
                    liuzhuan.SCMJ = reader["SCMJ"].ToString();
                    liuzhuan.FBFBM = reader["FBFBM"].ToString();
                    liuzhuan.ZCFBM = reader["ZCFBM"].ToString();
                    liuzhuan.CBJYQZBM = reader["CBJYQZBM"].ToString();
                    liuzhuan.LZFS = reader["LZFS"].ToString();
                    liuzhuan.LZQXKSRQ = reader["LZQXKSRQ"].ToString();
                    liuzhuan.LZQXJSRQ = reader["LZQXJSRQ"].ToString();
                    liuzhuan.LZQX = reader["LZQX"].ToString();
                    liuzhuan.LZJG = reader["LZJG"].ToString();
                    liuzhuan.HTQDRQ = reader["HTQDRQ"].ToString();
                    liuzhuan.LZHTBM = reader["LZHTBM"].ToString();
                    liuzhuan.SRFBM = reader["SRFBM"].ToString();
                    liuzhuan.Reporter = reader["Reporter"].ToString();
                    liuZhuanData.Add(liuzhuan);
                }
            }
            con.Close();
            return liuZhuanData;
        }



        public bool Insert(Liuzhuan liuzhuan)
        {
            string insertSql = "insert into LiuZhuanTable(DKBM,DKLB,DLDJ,TDYT,CBMJ,SCMJ,FBFBM,ZCFBM,CBJYQZBM,LZFS,LZQXKSRQ,LZQXJSRQ,LZQX,LZJG,HTQDRQ,LZHTBM,SRFBM) values(@DKBM,@DKLB,@DLDJ,@TDYT,@CBMJ,@SCMJ,@FBFBM,@ZCFBM,@CBJYQZBM,@LZFS,@LZQXKSRQ,@LZQXJSRQ,@LZQX,@LZJG,@HTQDRQ,@LZHTBM,@SRFBM)";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = insertSql;
            cmd.Parameters.Add(new OleDbParameter("@DKBM", liuzhuan.DKBM));
            cmd.Parameters.Add(new OleDbParameter("@DKLB", liuzhuan.DKLB));
            cmd.Parameters.Add(new OleDbParameter("@DLDJ", liuzhuan.DLDJ));
            cmd.Parameters.Add(new OleDbParameter("@TDYT", liuzhuan.TDYT));
            cmd.Parameters.Add(new OleDbParameter("@CBMJ", liuzhuan.CBMJ));
            cmd.Parameters.Add(new OleDbParameter("@SCMJ", liuzhuan.SCMJ));
            cmd.Parameters.Add(new OleDbParameter("@FBFBM", liuzhuan.FBFBM));
            cmd.Parameters.Add(new OleDbParameter("@ZCFBM", liuzhuan.ZCFBM));
            cmd.Parameters.Add(new OleDbParameter("@CBJYQZBM", liuzhuan.CBJYQZBM));
            cmd.Parameters.Add(new OleDbParameter("@LZFS", liuzhuan.LZFS));
            cmd.Parameters.Add(new OleDbParameter("@LZQXKSRQ", liuzhuan.LZQXKSRQ));
            cmd.Parameters.Add(new OleDbParameter("@LZQXJSRQ", liuzhuan.LZQXJSRQ));
            cmd.Parameters.Add(new OleDbParameter("@LZQX", liuzhuan.LZQX));
            cmd.Parameters.Add(new OleDbParameter("@LZJG", liuzhuan.LZJG));
            cmd.Parameters.Add(new OleDbParameter("@HTQDRQ", liuzhuan.HTQDRQ));
            cmd.Parameters.Add(new OleDbParameter("@LZHTBM", liuzhuan.LZHTBM));
            cmd.Parameters.Add(new OleDbParameter("@SRFBM", liuzhuan.SRFBM));

            con.Open();
            int infCount = cmd.ExecuteNonQuery();
            bool returnInfo = false;
            if (infCount == 1)
            {
                returnInfo = true;
            }
            con.Close();
            return returnInfo;
        }

        public int GetCountByCjbm(string cjbm)
        {
            string sql = "select count(DKBM) from LiuZhuanTable where FBFBM LIKE '" + cjbm + "%'";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = sql;
            con.Open();
            int infCount = (int)cmd.ExecuteScalar();
            con.Close();
            return infCount;
        }
        public float GetAreaByCjbm(string cjbm)
        {
            string sql = "select CBMJ from LiuZhuanTable where FBFBM LIKE '" + cjbm + "%'";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = sql;
            con.Open();
            OleDbDataReader reader = cmd.ExecuteReader();
            float area = 0;

            if (!reader.HasRows)
            {
                area = 0;
            }
            else
            {
                while (reader.Read())
                {
                    area += Convert.ToSingle(reader["CBMJ"].ToString());
                }
            }
            con.Close();
            return area;
        }
        //获取大户
        public List<CBF> GetBigCBFBM(string cjbm, float size)
        {
            string sql = "SELECT DISTINCT SRFBM FROM LiuZhuanTable where SRFBM  LIKE '" + cjbm + "%'";
            OleDbCommand cmd = new OleDbCommand();
            cmd = con.CreateCommand();
            cmd.CommandText = sql;
            con.Open();
            OleDbDataReader reader = cmd.ExecuteReader();
            List<string> listSRFBM = new List<string>();
            while (reader.Read())
            {
                listSRFBM.Add(reader["SRFBM"].ToString());
            }
            con.Close();
            List<CBF> cBF = new List<CBF>();
            foreach (string srfbm in listSRFBM)
            {
                string sqlSum = "SELECT SUM(CBMJ) AS MjTotal FROM LiuZhuanTable where SRFBM ='" + srfbm + "'";
                float sizeByCBF = Convert.ToSingle(ExecuteScalar(sqlSum));
                string sqlName = "SELECT CBFMC  FROM CBF where CBFBM ='" + srfbm + "'";
                string cbfName = ExecuteScalar(sqlName);
                string cbc = ExecuteScalar("SELECT COUNT(DKBM) FROM LiuZhuanTable Where SRFBM='" + srfbm + "'");
                if (Convert.ToSingle(sizeByCBF) > size && cbfName != "")
                {
                    cBF.Add(new CBF()
                    {
                        CBFBM = srfbm,
                        CBFXM = cbfName,
                        CBMJ = sizeByCBF,
                        CBC = cbc
                    });
                }
            }
            return cBF;
        }

        public string ExecuteScalar(string sql)
        {
            OleDbCommand cmd1 = new OleDbCommand();
            cmd1 = con.CreateCommand();
            con.Open();
            cmd1.CommandText = sql;
            string result = cmd1.ExecuteScalar().ToString();
            con.Close();
            return result;
        }



    }
}