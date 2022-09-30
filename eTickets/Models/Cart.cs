using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eTickets.Models
{
    public class Cart
    {
        public int cartId { get; set; }
        public String productName { get; set; }
        public int userId { get; set; }

        public int quantity { get; set; }
    }
}
