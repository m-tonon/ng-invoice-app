namespace Invoices.ReadModels
{
  public record InvoiceRm(
    Guid Id,
    string billerStreetAddress,
    string billerCity,
    int billerZipCode,
    string billerCountry,
    string clientName,
    string clientEmail,
    string clientStreetAddress,
    string clientCity,
    int clientZipCode,
    string clientCountry,
    DateTime invoiceDate,
    DateTime paymentDueDate,
    string paymentTerms,
    string productDescription
  );
}