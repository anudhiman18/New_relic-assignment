import React from 'react';
import { ChartGroup } from 'nr1';
import NewsletterSignups from './newsletter-signups';
import PastTests from './past-tests';
import TotalCancellations from './total-cancellations';
import TotalSubscriptions from './total-subscriptions';
import VersionPageViews from './page-views';
import VersionTotals from './totals';
import DynamicLine from './dynamic-line';

export default class AbTestNerdletNerdlet extends React.Component {
    render() {
        return <>
            <NewsletterSignups />
            <TotalSubscriptions />
            <TotalCancellations />
            <VersionTotals version='a' />
            <VersionTotals version='b' />
            <ChartGroup>
                <VersionPageViews version='a' />
                <VersionPageViews version='b' />
            </ChartGroup>
            <PastTests />

            <DynamicLine />
        </>
    }
}
