import { getDataFromServer } from "src/util/dataFromServer";

const stable = "stable";
const version = getDataFromServer().Version || stable;
const docsURLBase = "https://www.cockroachlabs.com/docs/" + version;
const docsURLBaseNoVersion = "https://www.cockroachlabs.com/docs/" + stable;

function docsURL(pageName: string): string {
  return `${docsURLBase}/${pageName}`;
}

function docsURLNoVersion(pageName: string): string {
  return `${docsURLBaseNoVersion}/${pageName}`;
}

export const adminUILoginNoVersion = docsURLNoVersion(
  "admin-ui-access-and-navigate.html#secure-the-admin-ui",
);
export const startFlags = docsURL("start-a-node.html#flags");
export const pauseJob = docsURL("pause-job.html");
export const cancelJob = docsURL("cancel-job.html");
export const enableNodeMap = docsURL("enable-node-map.html");
export const configureReplicationZones = docsURL(
  "configure-replication-zones.html",
);
export const transactionalPipelining = docsURL(
  "architecture/transaction-layer.html#transaction-pipelining",
);
export const adminUIAccess = docsURL("admin-ui-overview.html#admin-ui-access");
export const howAreCapacityMetricsCalculated = docsURL(
  "admin-ui-storage-dashboard.html#capacity-metrics",
);
export const keyValuePairs = docsURL(
  "architecture/distribution-layer.html#table-data",
);
export const databaseTable = docsURL("admin-ui-databases-page.html");
export const jobTable = docsURL("admin-ui-jobs-page.html");
export const statementsTable = docsURL("admin-ui-statements-page.html");
export const statementDiagnostics = docsURL(
  "admin-ui-statements-page.html#diagnostics",
);
export const statementsSql = docsURL(
  "admin-ui-statements-page.html#sql-statement-fingerprints",
);
export const statementsRetries = docsURL(
  "transactions.html#transaction-retries",
);
export const statementsTimeInterval = docsURL(
  "admin-ui-statements-page.html#time-interval",
);
export const capacityMetrics = docsURL(
  "admin-ui-cluster-overview.html#capacity-metrics",
);
export const nodeLivenessIssues = docsURL(
  "cluster-setup-troubleshooting.html#node-liveness-issues",
);
export const howItWork = docsURL("cockroach-quit.html#how-it-works");
export const clusterStore = docsURL("cockroach-start.html#store");
export const clusterGlossary = docsURL("architecture/overview.html#glossary");
export const reviewOfCockroachTerminology = docsURL(
  "admin-ui-replication-dashboard.html#review-of-cockroachdb-terminology",
);
export const sessionsTable = docsURL("ui-sessions-page.html");
// Note that these explicitly don't use the current version, since we want to
// link to the most up-to-date documentation available.
export const upgradeCockroachVersion =
  "https://www.cockroachlabs.com/docs/stable/upgrade-cockroach-version.html";
export const enterpriseLicensing =
  "https://www.cockroachlabs.com/docs/stable/enterprise-licensing.html";

// Not actually a docs URL.
export const startTrial = "https://www.cockroachlabs.com/pricing/start-trial/";
export const transactionsTable = docsURL("ui-transactions-page.html");
