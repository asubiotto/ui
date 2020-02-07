import React from "react";
import { css } from "astroturf";

const styles = css`
  @import "../styles/tokens.scss";

  .badge {
    display: inline-block;
    width: fit-content;
    padding: crl-gutters(0.25) crl-gutters(0.75);
    border-radius: 3px;
    vertical-align: crl-gutters(0.5);
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
  }

  .default {
    background: $crl-neutral-2;
    color: $crl-base-text--dark;
  }

  .success {
    background: rgba($crl-green-1, 0.3);
    color: $crl-base-green;
  }

  .warning {
    background: rgba($crl-orange-1, 0.3);
    color: $crl-base-yellow;
  }

  .danger {
    background: rgba($crl-base-red, 0.3);
    color: $crl-base-red;
  }

  .lowercase {
    text-transform: none;
  }
`;

export default function Badge(props: {
  message: string;
  type?: "default" | "success" | "warning" | "danger";
  lowercase?: boolean;
}) {
  return (
    <div
      className={`${styles.badge} ${
        props.type ? styles[props.type] : styles.default
      } ${props.lowercase ? styles.lowercase : null}`}
    >
      {props.message}
    </div>
  );
}