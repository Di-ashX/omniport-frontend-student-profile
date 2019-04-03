import React from "react";
import { Icon, List, Segment } from "semantic-ui-react";
import { EditIcon } from "./editIcon";
import { formatDate } from "./../utils";

import style from "../styles.css";

const Position = props => {
  return (
    <Segment>
      <div styleName="style.flex-box">
        <List.Item>
          {/*  */}
          <List.Content>
            {props.data.position}, <b>{props.data.organisation}</b>
            <br />
            <span styleName="style.gray">
              {formatDate(props.data.startDate)} to {formatDate(props.data.endDate)}
            </span>
            <p styleName="style.gray style.description">{props.data.description}</p>
          </List.Content>
        </List.Item>

        <div>
          <EditIcon rearrange={props.rearrange} onClick={() => props.manageData(props.data.id)} />
        </div>
      </div>
    </Segment>
  );
};
export default Position;
