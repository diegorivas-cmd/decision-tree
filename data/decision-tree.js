/* ============================================
   HostPapa Decision Tree Data
   Auto-generated from Excel Database
   Total Cases: 35
   ============================================ */

const decisionTree = [
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (cPanel Webmail)',
        issue_type: 'Cannot receive emails (Webmail)',
        client_response: 'We’ll review your mailbox and server settings to restore incoming email delivery.',
        l1_checklist: 'Confirm MX points to the correct mail host; confirm mail.* points to the correct IP; verify Email Routing is Automatic/Local as appropriate; verify mailbox is not at 100% storage.',
        escalation_guidance: 'If all checks are OK and issue persists, escalate to Technical Support with affected mailbox + tests.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Supported only if email is hosted on HostPapa/cPanel.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (cPanel Webmail)',
        issue_type: 'Cannot send emails (Webmail)',
        client_response: 'We’ll verify deliverability settings and test sending from Webmail.',
        l1_checklist: 'Check cPanel > Email Deliverability (SPF/DKIM) shows Valid; send a test email; confirm no bounce-back.',
        escalation_guidance: 'If still failing after checks, escalate to Technical Support with exact error/bounce details.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Supported only if email is hosted on HostPapa/cPanel.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (cPanel Webmail)',
        issue_type: 'Mailbox full / quota reached',
        client_response: 'Your mailbox is at its storage limit; freeing space or increasing quota will restore delivery.',
        l1_checklist: 'cPanel > Email Accounts: check usage; delete old mail or increase quota; re-test delivery.',
        escalation_guidance: 'Escalate only if usage does not match cPanel or issue persists after cleanup/quota increase.',
        destination_team: 'L1',
        support_limit: 'Mailbox quotas depend on plan.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (cPanel Webmail)',
        issue_type: 'Email routing misconfiguration',
        client_response: 'We’ll verify the email routing configuration for your domain.',
        l1_checklist: 'cPanel > Email Routing: set to Automatic (recommended) unless MX points elsewhere.',
        escalation_guidance: 'If correct but issue persists, escalate to Technical Support.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Routing must match where MX points.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (Email Client)',
        issue_type: 'Cannot send emails (Email Client)',
        client_response: 'We’ll confirm your mail client settings and test sending from Webmail.',
        l1_checklist: 'Verify SMTP auth is enabled; use port 587 (preferred) or 465; username is full email; test sending from Webmail to confirm server-side vs device-side.',
        escalation_guidance: 'If it fails in Webmail too, escalate to Technical Support with errors and tests performed.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'If customer is not using HostPapa mail servers, support is limited.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (Email Client)',
        issue_type: 'Cannot receive emails (Email Client)',
        client_response: 'We’ll confirm your mail client settings and check whether messages arrive in Webmail.',
        l1_checklist: 'Check Webmail inbox/spam; confirm mailbox not full; confirm MX records; confirm IMAP/POP settings; review filters/forwarders; re-test.',
        escalation_guidance: 'If emails don’t arrive in Webmail and MX is correct, escalate to Technical Support.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'If Webmail works, issue is client-side (device/app/network).'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (Email Client)',
        issue_type: 'Emails missing on one device (POP vs IMAP)',
        client_response: 'This is commonly caused by POP on one device downloading/removing messages before other devices sync.',
        l1_checklist: 'Check all devices: if any uses POP, switch all devices to IMAP; re-test.',
        escalation_guidance: 'No escalation unless emails are also missing in Webmail.',
        destination_team: 'L1',
        support_limit: 'POP behavior varies by device settings.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (Email Client)',
        issue_type: 'Stuck in Outbox / delayed sending',
        client_response: 'We’ll adjust SMTP settings to improve sending reliability.',
        l1_checklist: 'Confirm SMTP port 587 + authentication; try server hostname/IP instead of mail.domain.com; re-test.',
        escalation_guidance: 'Escalate if it also fails in Webmail or persists with confirmed settings.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Port 25 blocks by ISPs are common.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (Email Client)',
        issue_type: 'Webmail not loading / possible IP block',
        client_response: 'We’ll check if your IP is blocked or if there’s a network issue reaching Webmail.',
        l1_checklist: 'Test from mobile data/hotspot; try alternate Webmail URL; gather public IP.',
        escalation_guidance: 'Escalate to Technical Support if IP looks blocked or Webmail fails from multiple networks.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Security blocks may apply.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email',
        issue_type: 'Reset mailbox password (cPanel)',
        client_response: 'We can help you reset the mailbox password from your HostPapa dashboard.',
        l1_checklist: 'Dashboard/cPanel > Email Accounts > Manage > set new password > Save. Do not share passwords in chat.',
        escalation_guidance: 'Escalate if password reset fails due to system/permission errors.',
        destination_team: 'L1 → L2 if needed',
        support_limit: 'Account verification required.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email',
        issue_type: 'Provide IMAP/SMTP settings',
        client_response: 'Here are the recommended settings for your email app.',
        l1_checklist: 'Incoming: mail.domain.com | IMAP 993 (SSL) or POP 995 (SSL). Outgoing: SMTP 587 (TLS) or 465 (SSL). Username: full email. SMTP auth ON.',
        escalation_guidance: 'Escalate only if Webmail also fails with correct DNS and mailbox.',
        destination_team: 'L1',
        support_limit: 'Client-side configuration guidance.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Papamail (Advanced/Basic)',
        issue_type: 'Cannot send/receive (Hosted Email)',
        client_response: 'We’ll verify your hosted email DNS records and mailbox status.',
        l1_checklist: 'Confirm required MX/CNAME/TXT records for Hosted Email; confirm mailbox storage; test via Webmail/portal if available.',
        escalation_guidance: 'If records are correct and issue persists, escalate to Product Specialist with details.',
        destination_team: 'HP - Product Specialist',
        support_limit: 'Applies only to Advanced/Basic email service.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Papamail (Advanced/Basic)',
        issue_type: 'Reset mailbox password (Hosted Email)',
        client_response: 'We can reset the password for your hosted email mailbox.',
        l1_checklist: 'Use Hosted Email admin portal to reset password. Do not share passwords in chat; have user change after login.',
        escalation_guidance: 'Escalate to Product Specialist if portal access/mapping/licensing blocks reset.',
        destination_team: 'L1 / HP - Product Specialist',
        support_limit: 'License/service mapping may be required.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Papamail (Advanced/Basic)',
        issue_type: 'Need additional mailbox license',
        client_response: 'Adding new hosted mailboxes may require an additional license.',
        l1_checklist: 'Confirm current license count; advise that Solutions/Account Manager can add licenses if needed.',
        escalation_guidance: 'If license exists but system won’t allow mailbox creation, escalate to Product Specialist.',
        destination_team: 'HP - Solutions / HP - Product Specialist',
        support_limit: 'License provisioning is an internal workflow.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Update nameservers',
        client_response: 'We can guide you to update your domain’s nameservers.',
        l1_checklist: 'Dashboard > Domains > Manage > Nameservers > enter new NS > Save. Advise 24–48h propagation.',
        escalation_guidance: 'If it’s a promotional domain or cannot be updated, escalate to Domains team.',
        destination_team: 'L1 → HP - Domains if needed',
        support_limit: 'Propagation can take up to 24–48 hours.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'DNS propagation delay',
        client_response: 'If changes were made recently, it may still be propagating worldwide.',
        l1_checklist: 'Confirm when changes were made; advise 24–48h; flush DNS cache; test from multiple networks.',
        escalation_guidance: 'Escalate if beyond 48h or records appear incorrect.',
        destination_team: 'L1 → HP - Domains',
        support_limit: 'Propagation depends on external resolvers/ISPs.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Domain not resolving',
        client_response: 'We’ll confirm nameservers and DNS records to restore resolution.',
        l1_checklist: 'Check current nameservers; verify A/AAAA/CNAME/MX records; ensure no mixed nameservers; confirm propagation window.',
        escalation_guidance: 'Escalate to Domains if NS cannot be updated or zone is inconsistent after propagation.',
        destination_team: 'HP - Domains / HP - Technical Support (L2)',
        support_limit: 'Support scope depends on where DNS is hosted.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Get EPP/Auth code (Transfer OUT)',
        client_response: 'We can guide you to request the domain transfer authorization (EPP) code.',
        l1_checklist: 'Confirm Admin email is correct; unlock domain; request EPP to be emailed (if supported for that TLD).',
        escalation_guidance: 'Escalate to Domains for TLDs requiring manual handling or if system cannot send EPP.',
        destination_team: 'HP - Domains',
        support_limit: 'Some TLDs have special transfer rules (e.g., IPS TAG for .UK).'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Domain renewal/expiration issue',
        client_response: 'We’ll review domain status and renewal/billing details to restore service.',
        l1_checklist: 'Confirm expiry date, auto-renew setting, and payment method; check invoices; verify grace period.',
        escalation_guidance: 'Escalate to Billing/Domains based on renewal failure root cause.',
        destination_team: 'HP - Billing / HP - Domains',
        support_limit: 'Registry grace/redemption periods vary.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: 'Error establishing a database connection',
        client_response: 'We’ll check your WordPress database configuration and connectivity.',
        l1_checklist: 'Verify wp-config.php DB name/user/host; confirm DB user exists and has privileges; check recent password changes.',
        escalation_guidance: 'Escalate to L2 for DB/service checks or log review if credentials are correct but error persists.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Do not share DB credentials in chat.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: 'Maintenance mode stuck',
        client_response: 'Your site may be stuck in maintenance mode; we can remove the maintenance flag.',
        l1_checklist: 'File Manager: delete/rename .maintenance in site root; re-test site.',
        escalation_guidance: 'Escalate if file access/permissions prevent changes or site remains down.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Requires File Manager access.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: '500/503 errors',
        client_response: 'We’ll isolate whether this is a plugin/theme issue or a server/resource issue.',
        l1_checklist: 'Check recent changes; temporarily disable plugins; switch theme; verify PHP version; re-test.',
        escalation_guidance: 'Escalate to L2 for server logs/resource checks if unresolved.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'May require server logs.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: 'Site slow',
        client_response: 'We’ll review common performance factors and quick improvements.',
        l1_checklist: 'Enable caching; optimize images; remove heavy plugins; verify PHP version; check resource usage.',
        escalation_guidance: 'Escalate to L2 for deeper server-side analysis if needed.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Performance depends on site build and plan limits.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Account / Suspension',
        issue_type: 'Outgoing email suspended (sending limit)',
        client_response: 'Your outgoing email sending was temporarily suspended after exceeding sending limits.',
        l1_checklist: 'Confirm scope (outgoing only); advise cleanup/upgrade; if eligible, run unsuspension workflow (internal) and re-test sending.',
        escalation_guidance: 'Escalate to Solutions/AM for plan changes; L2 only if unsuspension fails.',
        destination_team: 'HP - Solutions / HP - Technical Support (L2)',
        support_limit: 'Do not share internal suspension notes.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (cPanel Webmail)',
        issue_type: 'Cannot receive emails',
        client_response: 'Thank you for letting us know. I understand how important it is to receive your emails without interruption. I’ll review your mailbox and domain settings to identify what may be preventing incoming messages from arriving.',
        l1_checklist: 'Check MX records; Verify Email Routing; Confirm mailbox quota not exceeded; Test delivery from external address',
        escalation_guidance: 'If MX and routing are correct but emails do not arrive, escalate with affected email address and test results.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Supported only if email is hosted on HostPapa.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email (Email Client)',
        issue_type: 'Cannot send emails',
        client_response: 'I completely understand how frustrating it is when emails won’t send. Let’s verify your outgoing server settings and ensure everything is configured correctly.',
        l1_checklist: 'Confirm SMTP port 587 or 465; Ensure SMTP authentication enabled; Username is full email; Test sending from Webmail',
        escalation_guidance: 'If sending fails from Webmail as well, escalate with error message and time of test.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'If Webmail works, issue is device/application configuration.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email',
        issue_type: 'Mailbox full / bounce-back',
        client_response: 'It appears your mailbox may have reached its storage limit. Once space is freed or quota increased, email delivery should resume normally.',
        l1_checklist: 'Check disk usage in cPanel; Increase quota or delete emails; Re-test delivery',
        escalation_guidance: 'Escalate only if usage shown does not match reported behavior.',
        destination_team: 'L1',
        support_limit: 'Mailbox storage limits depend on hosting plan.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Email',
        issue_type: 'DNS mail server not responding (DNS-65,554)',
        client_response: 'The error suggests your mail server hostname is not resolving correctly. I’ll verify your DNS configuration to ensure the mail server is reachable.',
        l1_checklist: 'Check domain nameservers; Verify MX records; Confirm A record for mail hostname; Test DNS propagation',
        escalation_guidance: 'Escalate if DNS is correct but server is not responding.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'DNS propagation may take 24–48 hours.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Domain not resolving',
        client_response: 'I understand this can be concerning. I’ll verify your domain’s nameservers and DNS records to restore proper resolution as quickly as possible.',
        l1_checklist: 'Confirm active status; Check nameservers; Verify A/AAAA records; Confirm propagation window',
        escalation_guidance: 'Escalate if nameservers cannot be updated or DNS zone appears corrupted.',
        destination_team: 'HP - Domains / HP - Technical Support (L2)',
        support_limit: 'Support scope depends on where DNS is hosted.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Nameserver update propagation delay',
        client_response: 'Since your nameservers were recently updated, it may still be propagating worldwide. This process can take up to 24–48 hours.',
        l1_checklist: 'Confirm change time; Advise wait period; Flush local DNS; Test from alternate network',
        escalation_guidance: 'Escalate only if beyond 48 hours with no resolution.',
        destination_team: 'L1 → HP - Domains',
        support_limit: 'Propagation depends on external DNS networks.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'DNS / Domain',
        issue_type: 'Request EPP/Auth code',
        client_response: 'I can guide you through retrieving your domain’s authorization code for transfer. Let’s ensure your admin email is updated first.',
        l1_checklist: 'Verify admin email; Unlock domain; Request EPP code; Confirm receipt',
        escalation_guidance: 'Escalate for special TLDs requiring manual handling (.UK, etc.).',
        destination_team: 'HP - Domains',
        support_limit: 'Some TLDs require registry-level processing.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: 'Error establishing database connection',
        client_response: 'This usually means WordPress cannot connect to its database. I’ll review your configuration to help restore the connection.',
        l1_checklist: 'Verify wp-config credentials; Confirm database exists; Check DB user permissions; Review recent changes',
        escalation_guidance: 'Escalate if database service appears down or credentials are correct but error persists.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Database credentials should not be shared in chat.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: '500 Internal Server Error',
        client_response: 'I understand this can be alarming. We’ll isolate whether this is related to plugins, themes, or server configuration.',
        l1_checklist: 'Check recent changes; Rename .htaccess; Disable plugins; Verify PHP version',
        escalation_guidance: 'Escalate for server log review if issue persists.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'May require server log access.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'WordPress',
        issue_type: 'Site loading slowly',
        client_response: 'I know performance is critical for your visitors. Let’s review common performance factors and improve speed.',
        l1_checklist: 'Check heavy plugins; Enable caching; Optimize images; Confirm PHP version; Review resource usage',
        escalation_guidance: 'Escalate if server-level resource limits appear exceeded.',
        destination_team: 'HP - Technical Support (L2)',
        support_limit: 'Performance depends on plan and website structure.'
    },
    {
        request_origin: 'HostPapa',
        primary_area: 'Account / Suspension',
        issue_type: 'Outgoing email suspended (limit exceeded)',
        client_response: 'It appears outgoing email sending was temporarily suspended due to exceeded sending limits. I’ll guide you through the available options.',
        l1_checklist: 'Confirm suspension reason; Offer cleanup or upgrade; Use internal unsuspension workflow if applicable',
        escalation_guidance: 'Escalate to Solutions/Account Manager for plan changes if requested.',
        destination_team: 'HP - Solutions / L2',
        support_limit: 'Do not disclose internal suspension details.'
    }
];
