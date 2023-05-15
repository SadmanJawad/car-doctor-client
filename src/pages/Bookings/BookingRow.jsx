
const BookingRow = ({ booking }) => {
  const {date, service, price, img } = booking;

  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img
                src={img}
                alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </td>
        <td>{service}</td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default BookingRow;
<tr>
  <th>
    <label>
      <input type="checkbox" className="checkbox" />
    </label>
  </th>
  <td>
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img
            src="/tailwind-css-component-profile-2@56w.png"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">Hart Hagerty</div>
        <div className="text-sm opacity-50">United States</div>
      </div>
    </div>
  </td>
  <td>
    Zemlak, Daniel and Leannon
    <br />
    <span className="badge badge-ghost badge-sm">
      Desktop Support Technician
    </span>
  </td>
  <td>Purple</td>
  <th>
    <button className="btn btn-ghost btn-xs">details</button>
  </th>
</tr>;
