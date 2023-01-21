import Link from '@docusaurus/Link';
import latestRelease from '@site/latestRelease.json';
import React from 'react';

export default function InstallButton({
  includeVersion,
  className,
}: {
  includeVersion?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <Link
      to="/docs/installation"
      className={`button button--primary button--lg ${className}`}
    >
      Install Cloud2SQL
      {includeVersion ? ` ${latestRelease.version}` : ''}
    </Link>
  );
}
