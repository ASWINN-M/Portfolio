import { asset } from "../utils/asset";

const LEETCODE_URL = "https://leetcode.com/u/weWjVE13i9/";
const NEETCODE_URL = "https://neetcode.io/user/StormSannin801";

const items = [
  {
    title: "Code Crux Core Member",
    subtitle: "Competitive programming · VIT-AP",
    logo: asset("assets/logos/codecrux.svg"),
    logoAlt: "Code Crux",
    href: null,
  },
  {
    title: "LeetCode",
    subtitle: "DSA practice",
    logo: asset("assets/logos/leetcode.svg"),
    logoAlt: "LeetCode",
    href: LEETCODE_URL,
  },
  {
    title: "NeetCode",
    subtitle: "Pattern-based DSA",
    logo: asset("assets/logos/neetcode.svg"),
    logoAlt: "NeetCode",
    href: NEETCODE_URL,
  },
];

const Contributions = () => {
  return (
    <section id="contributions" className="c-space py-10 md:py-14">
      <h2 className="text-heading">Contributions</h2>
      <p className="mt-2 text-neutral-400 text-sm md:text-base max-w-2xl">
        Code Crux core member · consistent LeetCode & NeetCode practice.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => {
          const content = (
            <>
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="w-8 h-8 rounded-lg bg-white/5 p-1 shrink-0"
              />
              <span className="min-w-0">
                <span className="block text-sm font-medium text-white">
                  {item.title}
                </span>
                <span className="block text-xs text-neutral-400">
                  {item.subtitle}
                </span>
              </span>
            </>
          );

          const className =
            "inline-flex items-center gap-3 rounded-xl border border-white/10 bg-navy/40 px-3.5 py-2.5";

          return item.href ? (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${className} hover:border-aqua/40 transition-colors`}
            >
              {content}
            </a>
          ) : (
            <div key={item.title} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contributions;
