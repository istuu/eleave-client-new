import React from "react";
import { Card, CardBody, Progress } from "reactstrap";


const EmployeeSummary = ({summaries, cardClass="h-100"}) => {

  return (
    <Card className={cardClass}>
      <CardBody>
        {/* <CardTitle> */}
          <h4 className="mb-4">My Leave Summary</h4>
        {/* </CardTitle> */}
        {summaries.map((item, key) => {
          return (
            <div key={key} className="mb-4 mt-4">
              <p className="mb-2">
                {item.type_name}
                <span className="float-right text-muted">
                  {item.used}/{item.used+item.leave_remaining}
                </span>
              </p>
              <Progress value={item.used/(item.used+item.leave_remaining)*100} />
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
export default EmployeeSummary;
