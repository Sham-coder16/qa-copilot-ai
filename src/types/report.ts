export interface ReportStats {
  passed: number;
  failed: number;
  skipped: number;
}

export interface PlaywrightReport {
  stats: ReportStats;
}