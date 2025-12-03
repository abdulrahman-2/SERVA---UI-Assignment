import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", black: 78000, red: 45000 },
  { name: "Feb", black: 105000, red: 67000 },
  { name: "Mar", black: 90000, red: 103000 },
  { name: "Apr", black: 130000, red: 138000 },
  { name: "May", black: 70000, red: 42000 },
  { name: "Jun", black: 92000, red: 80000 },

  { name: "Jul", black: 81000, red: 57000, upcoming: true },
  { name: "Aug", black: 110000, red: 89000, upcoming: true },
  { name: "Sep", black: 122000, red: 85000, upcoming: true },
  { name: "Oct", black: 148000, red: 132000, upcoming: true },
  { name: "Nov", black: 108000, red: 76000, upcoming: true },
  { name: "Dec", black: 127000, red: 87000, upcoming: true },
];

const SalesChart = () => {
  return (
    <div className="w-full my-[30px] overflow-x-auto">
      <div className="min-w-[640px] h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4} barCategoryGap="20%" >
            <YAxis
              domain={[20000, 160000]}
              ticks={[
                20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000,
              ]}
              tick={{
                fill: "#666",
                fontSize: 12,
              }}
              tickFormatter={(value) => `${value / 1000}K`}
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#666", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip cursor={{ fill: "transparent" }} />

            <Bar
              dataKey="black"
              barSize={14}
              shape={(props) => {
                const color = props.payload.upcoming ? "#E3E3E3" : "#000000";
                return <rect {...props} fill={color} rx={3} />;
              }}
            />

            <Bar
              dataKey="red"
              barSize={14}
              shape={(props) => {
                const color = props.payload.upcoming ? "#E3E3E3" : "#E44A4A";
                return <rect {...props} fill={color} rx={3} />;
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
