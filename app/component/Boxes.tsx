import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

function Boxes({}: Props) {
  const data = [
    { name: "Anshik", price: "$1199", icon: "" },
    { name: "Anshik", price: "$1199", icon: "" },
    { name: "Anshik", price: "$1199", icon: "" },
    { name: "Anshik", price: "$1199", icon: "" },
  ];
  const namePriceComponent = data.map((each, index) => {
    return (
      <div key={index}>
        <div id="icon">
          <img src={each.icon} alt="error" />
        </div>
        <div>
          {each.name}
          <br />
          <span> {each.price}</span>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex flex-row bg-red-50 w-full justify-around ">
        {namePriceComponent}
      </div>
      <div className="w-full">
        <TableBox />
      </div>
      <div>Boxes</div>
      <div>Boxes</div>
    </>
  );
}
const TableBox = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <>
      <div>
        <span>Head</span>
        <br />
        <span>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </span>
      </div>
      <Table className="w-full border-black border">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="bg-gray-400">
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="border-black border">
                {invoice.invoice}
              </TableCell>
              <TableCell className="border-black border">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="border-black border">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="border-black border">
                <button>hi</button>
                <button>hi</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mx-auto w-full flex flex-row justify-center items-center border-red-500 border">
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </div>
    </>
  );
};

export default Boxes;
