import Table, { ColumnDefs } from "@/components/Table";
import { employees, Employee } from "@/data/employee";

export default function Home() {
  const columnDefs: ColumnDefs<Employee>[] = [
    {
      title: "Name",
      render: (rowData) => `${rowData.firstName} ${rowData.lastName}`
    },
    {
      title: "Age",
      field: "age"
    },
    {
      title: "Email",
      field: "email"
    },
    {
      title: "Phone",
      field: "phone"
    }
  ]
  return (
    <main className="flex min-h-screen items-center justify-around bg-slate-50">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Generic  BEGE</h1>
        <Table<Employee>
          columnDefs={columnDefs}
          data={employees}
        />
      </section>
    </main>
  );
}