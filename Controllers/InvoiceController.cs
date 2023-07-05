using Invoices.ReadModels;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceApp.Controllers;

[ApiController]
[Route("[controller]")]
public class InvoiceController : ControllerBase
{
    private readonly ILogger<InvoiceController> _logger;

    public InvoiceController(ILogger<InvoiceController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<InvoiceRm> GetInvoices()
    => new InvoiceRm[]
    {
    new (
      Guid.NewGuid(),
      "Ap #877-1421 Ut St.",
      "New York City",
      10001,
      "USA",
      "Jeremy Robbin",
      "jeremyrobbin@gmail.com",
      "Ap #764-7054 Vel, Ave",
      "Chicago",
      12345,
      "USA",
      DateTime.Now,
      DateTime.Now.AddDays(30),
      "Net 30 Days",
      "lorem ipsum dolor sit amet"
    ),
    new (
      Guid.NewGuid(),
      "166 Ross St",
      "New York City",
      14020,
      "USA",
      "John Smith",
      "johnsmith@gmail.com",
      "1751 Guadalajara Ave",
      "Brownsville - Tx",
      12345,
      "USA",
      DateTime.Now,
      DateTime.Now.AddDays(60),
      "Net 60 Days",
      "lorem ipsum dolor sit amet"
    )
  };
}