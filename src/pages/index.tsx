export default function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        Welcome to my digital garden! There&apos;s not much here right now, but
        I&apos;ll be using this as a place to share my side projects,
        collections, writings, and other random creations.
      </p>

      <table className="details">
        <caption>
          <div>Personal Details</div>
        </caption>
        <tbody>
          <tr>
            <th className="width-min">Location</th>
            <td className="width-auto" colSpan={2}>
              Pittsburgh, PA, USA
            </td>
          </tr>
          <tr>
            <th className="width-min">Workplace</th>
            <td className="width-auto" colSpan={2}>
              <div className="tight">
                <a href="https://www.wprdc.org" target="_blank">
                  Western Pennsylvania Regional Data Center
                </a>
              </div>
              <div className="tight">
                <a href="https://ucsur.pitt.edu/">
                  Center for Social and Urban Research
                </a>
              </div>
              <div className="">
                <a href="https://www.pitt.edu" target="_blank">
                  University of Pittsburgh
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <th className="width-min" rowSpan={2}>
              Code
            </th>
            <td className="width-min" rowSpan={1}>
              <div>
                Work:{" "}
                <a href="https://github.com/wprdc" target="_blank">
                  github.com/wprdc
                </a>
              </div>
            </td>
            <td rowSpan={2} className="empty">
              <p></p>
            </td>
          </tr>
          <tr>
            <td rowSpan={1} className="width-min">
              <div>
                Personal:{" "}
                <a href="https://github.com/saylorsd" target="_blank">
                  github.com/saylorsd
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
