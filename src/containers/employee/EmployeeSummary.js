import React from "react";
import { Card, CardBody, CardTitle, Progress } from "reactstrap";


const EmployeeSummary = ({items, cardClass="h-100"}) => {

  return (
    <Card className={cardClass}>
      <CardBody>
        <CardTitle>
          <h4>My Leave Summary</h4>
        </CardTitle>
        {items.map((item, key) => {
          return (
            <div key={key} className="mb-4">
              <p className="mb-2">
                {item.type_name}
                <span className="float-right text-muted">
                  {/* {s.status}/{s.total} */}
                </span>
              </p>
              <Progress value={0} />
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
export default EmployeeSummary;
