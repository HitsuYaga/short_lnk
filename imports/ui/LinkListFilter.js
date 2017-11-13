import React from "react";
import { Session } from "meteor/session";

export default () => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={e => {
            console.log(e.target.checked);
            Session.set("showVisible", !e.target.checked);
          }}
        />
        Show links hidden
      </label>
    </div>
  );
};
