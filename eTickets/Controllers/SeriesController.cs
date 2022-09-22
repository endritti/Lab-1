using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using eTickets.Models;
using Microsoft.Extensions.Configuration;

namespace eTickets.Controllers
{
    [Route("admin/[controller]")]
    [ApiController]
    public class SeriesController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public SeriesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]

        public JsonResult Get()
        {
            string query = @"select serieId,name,description,cinema,genre,mainActor,producer,status from dbo.series";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Series sr)
        {
            string query = @"insert into dbo.series values
                            (
                            '" + sr.name + @"',
                            '" + sr.description + @"',
                            '" + sr.cinema + @"',
                            '" + sr.genre + @"',
                            '" + sr.mainActor + @"',
                            '" + sr.producer + @"',
                            '" + sr.status + @"')

                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Series sr)
        {
            string query = @"update dbo.series set                           
                            name = '" + sr.name + @"',
                            description = '" + sr.description + @"',
                            cinema = '" + sr.cinema + @"',
                            genre = '" + sr.genre + @"',
                            mainActor = '" + sr.mainActor + @"',
                            producer = '" + sr.producer + @"',
                            status = '" + sr.status + @"'

                            where serieId = " + sr.serieId + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from dbo.series 
                            where serieId = " + id + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DBAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
