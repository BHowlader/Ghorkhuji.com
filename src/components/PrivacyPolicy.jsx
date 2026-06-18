import LogoIcon from './LogoIcon';
import './PrivacyPolicy.css';

const policySections = [
  {
    title: 'Information We Collect',
    intro: 'We may collect the following categories of information:',
    groups: [
      {
        label: 'Personal Information',
        items: [
          'Full Name',
          'Phone Number',
          'Email Address',
          'Profile Photo',
          'Gender',
          'Date of Birth (if provided)',
          'Nationality',
          'Occupation',
          'Educational Institution',
          'Social Media Information (if connected)',
        ],
      },
      {
        label: 'Property Information',
        intro: 'When listing a property, we may collect:',
        items: [
          'Property Address',
          'Location Coordinates',
          'Rental Price',
          'Property Images and Videos',
          'Property Description',
          'Contact Information',
        ],
      },
      {
        label: 'Roommate Profile Information',
        intro: 'Users searching for roommates may voluntarily provide:',
        items: [
          'Lifestyle Preferences',
          'Smoking Preferences',
          'Pet Preferences',
          'Religious Preferences',
          'Budget Preferences',
          'Gender Preferences',
          'Occupation or Student Status',
        ],
      },
      {
        label: 'Device and Technical Information',
        intro: 'We may automatically collect:',
        items: [
          'Device Model',
          'Operating System',
          'Browser Type',
          'IP Address',
          'Device Identifiers',
          'Crash Reports',
          'App Usage Analytics',
        ],
      },
      {
        label: 'Location Information',
        intro: 'With your permission, we may collect:',
        items: ['GPS Location', 'Approximate Location', 'Search Area Preferences'],
        outro: 'Location information helps users discover nearby properties and roommates.',
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    intro: 'We use collected information to:',
    items: [
      'Create and manage user accounts',
      'Display rental listings',
      'Facilitate roommate matching',
      'Improve search recommendations',
      'Verify listings and reduce fraud',
      'Provide customer support',
      'Send notifications and updates',
      'Prevent illegal activities',
      'Improve platform performance',
      'Conduct analytics and research',
      'Comply with legal obligations',
    ],
  },
  {
    title: 'Legal Basis for Processing',
    intro: 'Ghorkhuji processes personal information based on:',
    items: [
      'User consent',
      'Contractual necessity',
      'Legitimate business interests',
      'Compliance with legal obligations',
      'Fraud prevention and platform security',
    ],
    outro:
      'Where required by law, we will obtain your consent before processing certain categories of information.',
  },
  {
    title: 'User-Generated Content',
    intro: 'Any information you voluntarily publish on Ghorkhuji, including:',
    items: ['Rental Listings', 'Property Photos', 'Reviews', 'Comments', 'Profile Information'],
    outro:
      'may become visible to other users. Users are responsible for ensuring that content they publish does not violate any law, third-party rights, or privacy rights.',
  },
  {
    title: 'Information Sharing',
    intro: 'We do not sell personal information. We may share information with:',
    groups: [
      {
        label: 'Service Providers',
        items: ['Cloud Hosting Providers', 'Analytics Providers', 'Customer Support Providers', 'Payment Processors'],
      },
      {
        label: 'Legal Authorities',
        intro: 'We may disclose information if required:',
        items: ['By court order', 'Government request', 'Law enforcement investigation', 'Regulatory authority'],
      },
      {
        label: 'Business Transfers',
        intro: 'In the event of:',
        items: ['Merger', 'Acquisition', 'Asset Sale', 'Investment Transaction'],
        outro: 'user information may be transferred as part of business assets.',
      },
    ],
  },
  {
    title: 'Third-Party Services',
    intro: 'Ghorkhuji may integrate with third-party services including:',
    items: [
      'Google Maps',
      'Google Analytics',
      'Firebase',
      'Apple Services',
      'Payment Gateways',
      'Social Login Providers',
    ],
    outro: 'These third parties may collect information according to their own privacy policies.',
  },
  {
    title: 'Data Retention',
    intro: 'We retain information only as long as necessary for:',
    items: ['Providing Services', 'Legal Compliance', 'Fraud Prevention', 'Business Operations'],
    outro: 'Inactive accounts may be deleted or anonymized after a reasonable retention period.',
  },
  {
    title: 'Data Security',
    intro: 'We implement reasonable technical and organizational safeguards including:',
    items: [
      'Encrypted Communications (HTTPS)',
      'Secure Cloud Infrastructure',
      'Access Controls',
      'Authentication Systems',
      'Monitoring and Fraud Detection',
    ],
    outro:
      'However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      'Ghorkhuji is intended for individuals aged 18 years or older.',
      'We do not knowingly collect personal information from children under 18.',
      'If we become aware that a child has submitted information, we will remove it promptly.',
    ],
  },
  {
    title: 'User Rights',
    intro: 'Subject to applicable law, users may have the right to:',
    items: [
      'Access their data',
      'Correct inaccurate data',
      'Request deletion',
      'Withdraw consent',
      'Restrict processing',
      'Obtain a copy of their information',
      'File complaints regarding privacy practices',
    ],
    outro: 'To exercise these rights, contact us at: privacy.ghorkhuji@gmail.com',
  },
  {
    title: 'Cookies and Similar Technologies',
    intro: 'We may use cookies, SDKs, analytics tools, and device identifiers to:',
    items: ['Improve user experience', 'Remember preferences', 'Analyze usage patterns', 'Prevent fraud'],
    outro: 'Users may manage cookie preferences through device settings.',
  },
  {
    title: 'International Data Transfers',
    paragraphs: [
      'Your information may be processed or stored on servers located outside Bangladesh.',
      'Where such transfers occur, Ghorkhuji will take reasonable measures to ensure appropriate protection of personal information.',
    ],
  },
  {
    title: 'Fraud Prevention and Safety',
    intro: 'To protect users, Ghorkhuji may:',
    items: [
      'Verify listings',
      'Detect suspicious activities',
      'Remove fraudulent accounts',
      'Monitor abuse of the platform',
    ],
    outro: 'Accounts violating our Terms of Service may be suspended or permanently removed.',
  },
  {
    title: 'Sensitive Information',
    intro: 'Users should avoid sharing:',
    items: [
      'National ID Numbers',
      'Passport Numbers',
      'Bank Account Details',
      'Credit Card Information',
      'Medical Records',
      'Other Sensitive Personal Data',
    ],
    outro: 'unless explicitly requested through secure and authorized processes.',
  },
  {
    title: 'Compliance with Bangladesh Law',
    intro: 'Ghorkhuji strives to comply with applicable laws and regulations of Bangladesh, including:',
    items: [
      'Cyber Security Act 2023',
      'Information and Communication Technology laws',
      'Consumer protection requirements',
      'Applicable Personal Data Protection regulations',
      'Future amendments and regulatory requirements related to digital privacy and data protection in Bangladesh.',
    ],
  },
  {
    title: 'Platform Role and Liability Disclaimer',
    paragraphs: [
      'Ghorkhuji is a technology platform that facilitates connections between property owners, landlords, tenants, and individuals seeking roommates. Ghorkhuji does not own, lease, manage, inspect, verify, endorse, broker, or control any property, landlord, tenant, roommate, or rental transaction listed or conducted through the Services.',
      'The platform operates primarily as a self-service and automated marketplace where property owners and landlords independently publish listings, and prospective tenants or roommates directly communicate and transact with them.',
      'Ghorkhuji is not a party to any rental agreement, roommate agreement, lease, payment arrangement, property transaction, or any other agreement entered into between users.',
    ],
    intro: 'Users are solely responsible for:',
    items: [
      'Verifying the identity of other users',
      'Inspecting properties before making decisions',
      'Conducting appropriate due diligence',
      'Negotiating rental terms',
      'Executing rental or roommate agreements',
      'Making or receiving payments',
      'Ensuring compliance with applicable laws and regulations',
    ],
    afterListParagraphs: [
      'While Ghorkhuji may implement reasonable measures to detect fraud, abuse, fake listings, or suspicious activities, Ghorkhuji does not guarantee the accuracy, authenticity, legality, safety, quality, availability, suitability, or reliability of any listing, property, landlord, tenant, roommate, user profile, communication, or transaction.',
      'To the fullest extent permitted by applicable law, Ghorkhuji shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to fraudulent activities, misrepresentation by users, fake or misleading listings, property disputes, rental disputes, roommate disputes, financial losses, personal injury, property damage, theft, harassment, criminal conduct, unauthorized transactions, or any interaction between users of the platform.',
      'Users acknowledge and agree that they use the Services and engage in any rental, roommate, or property-related transaction entirely at their own risk.',
      'By using Ghorkhuji, users expressly release and hold harmless Ghorkhuji, its founders, employees, affiliates, partners, and representatives from any claims, liabilities, losses, damages, costs, or expenses arising out of user interactions, property listings, roommate arrangements, or rental transactions conducted through the platform.',
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    intro: 'We may update this Privacy Policy from time to time. When significant changes occur, we will notify users through:',
    items: ['App Notifications', 'Email', 'Website Notices'],
    outro: 'The updated version will be posted with a revised Effective Date.',
  },
  {
    title: 'Contact Us',
    paragraphs: [
      'For questions regarding this Privacy Policy:',
      'Ghorkhuji',
      'Email: ghorkhuji@gmail.com',
      'Website: www.ghorkhuji.com',
      'Dhaka, Bangladesh',
    ],
  },
];

const renderList = (items) => (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const PrivacyPolicy = () => {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="container privacy-hero-inner">
          <a href="/" className="privacy-logo" aria-label="Go to Ghorkhuji home">
            <LogoIcon className="logo-icon" />
            <span>Ghorkhuji.</span>
          </a>
          <div className="privacy-hero-copy">
            <p className="section-kicker">Privacy Policy</p>
            <h1>Ghorkhuji Privacy Policy</h1>
            <p>Effective Date: June 15, 2026</p>
          </div>
        </div>
      </section>

      <section className="privacy-content">
        <article className="container privacy-document">
          <p>
            Welcome to Ghorkhuji ("Ghorkhuji", "we", "our", or "us"), a rental property and
            roommate-finding platform operating in Bangladesh.
          </p>
          <p>
            We respect your privacy and are committed to protecting your personal information. This Privacy
            Policy explains how Ghorkhuji collects, uses, stores, shares, and protects your information when you
            use our website, mobile applications, and related services (collectively, the "Services").
          </p>
          <p>
            By accessing or using Ghorkhuji, you agree to the collection and use of information in accordance
            with this Privacy Policy.
          </p>

          {policySections.map((section, index) => (
            <section className="privacy-section" key={section.title}>
              <h2>
                <span>{index + 1}.</span> {section.title}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.intro && <p>{section.intro}</p>}
              {section.items && renderList(section.items)}

              {section.groups?.map((group) => (
                <div className="privacy-group" key={group.label}>
                  <h3>{group.label}</h3>
                  {group.intro && <p>{group.intro}</p>}
                  {renderList(group.items)}
                  {group.outro && <p>{group.outro}</p>}
                </div>
              ))}

              {section.outro && <p>{section.outro}</p>}

              {section.afterListParagraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <p className="privacy-acknowledgement">
            By using Ghorkhuji, you acknowledge that you have read, understood, and agreed to this Privacy
            Policy.
          </p>
        </article>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
