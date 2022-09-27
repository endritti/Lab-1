using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eTickets.Models
{
    public class Series
    {
        public int serieId { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string cinema { get; set; }
        public string genre { get; set; }
        public string mainActor { get; set; }
        public string producer { get; set; }
        public string status { get; set; }
        public string photoFileName { get; set; }

    }
}
