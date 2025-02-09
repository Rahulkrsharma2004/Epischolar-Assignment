import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

export default function FiltersSidebar() {
  return (
    <div className="w-72  p-6 space-y-6">
      <div className="bg-[#1A202C] rounded-lg p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mx-auto mb-4">
          <svg
            width="156"
            height="155"
            viewBox="0 0 156 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_425)">
              <circle cx="78" cy="59" r="38" fill="#F7FAFC" />
            </g>
            <g clip-path="url(#clip0_1_425)">
              <path
                d="M89.199 44.4857C89.0448 44.4857 88.8906 44.4471 88.7556 44.37C85.0548 42.4617 81.855 41.6522 78.0192 41.6522C74.2027 41.6522 70.579 42.5581 67.2829 44.37C66.8203 44.6206 66.242 44.4471 65.9721 43.9845C65.7216 43.5219 65.895 42.9244 66.3577 42.6738C69.9429 40.727 73.875 39.7246 78.0192 39.7246C82.1249 39.7246 85.7101 40.6306 89.6423 42.6545C90.1242 42.9051 90.2977 43.4833 90.0471 43.9459C89.8736 44.2929 89.5459 44.4857 89.199 44.4857ZM61.6159 54.6052C61.4232 54.6052 61.2304 54.5474 61.0569 54.4317C60.6136 54.1233 60.5172 53.5258 60.8256 53.0825C62.7339 50.3839 65.1626 48.2636 68.0539 46.7794C74.1063 43.6568 81.855 43.6375 87.9268 46.7601C90.8181 48.2444 93.2468 50.3454 95.155 53.0246C95.4634 53.4487 95.3671 54.0655 94.9237 54.3739C94.4804 54.6823 93.8829 54.5859 93.5745 54.1426C91.8397 51.7139 89.6423 49.8057 87.0401 48.4757C81.5081 45.6422 74.434 45.6422 68.9213 48.4949C66.2998 49.8442 64.1024 51.7717 62.3677 54.2004C62.2135 54.4703 61.9243 54.6052 61.6159 54.6052ZM73.663 77.8706C73.4124 77.8706 73.1619 77.7742 72.9884 77.5815C71.3114 75.9045 70.4055 74.8251 69.114 72.4928C67.784 70.1219 67.0901 67.2306 67.0901 64.1272C67.0901 58.4025 71.9861 53.7378 78 53.7378C84.0139 53.7378 88.9098 58.4025 88.9098 64.1272C88.9098 64.667 88.4858 65.091 87.9461 65.091C87.4063 65.091 86.9823 64.667 86.9823 64.1272C86.9823 59.4626 82.9537 55.6654 78 55.6654C73.0462 55.6654 69.0177 59.4626 69.0177 64.1272C69.0177 66.9029 69.6345 69.4665 70.8103 71.5483C72.0439 73.7649 72.892 74.7094 74.3762 76.2129C74.7424 76.5984 74.7424 77.1959 74.3762 77.5815C74.1642 77.7742 73.9136 77.8706 73.663 77.8706ZM87.4834 74.3046C85.1897 74.3046 83.1658 73.7264 81.5081 72.5891C78.6361 70.6423 76.9206 67.4812 76.9206 64.1272C76.9206 63.5875 77.3446 63.1635 77.8843 63.1635C78.424 63.1635 78.8481 63.5875 78.8481 64.1272C78.8481 66.8451 80.2359 69.4087 82.5875 70.9893C83.9561 71.9145 85.5559 72.3578 87.4834 72.3578C87.9461 72.3578 88.7171 72.3 89.4881 72.1651C90.0085 72.0687 90.5097 72.4157 90.6061 72.9554C90.7024 73.4758 90.3555 73.977 89.8158 74.0733C88.7171 74.2854 87.7533 74.3046 87.4834 74.3046ZM83.6091 78.2754C83.532 78.2754 83.4356 78.2561 83.3585 78.2368C80.2937 77.3887 78.2891 76.2514 76.1881 74.189C73.4895 71.5097 72.0053 67.9438 72.0053 64.1272C72.0053 61.0046 74.6653 58.4603 77.9421 58.4603C81.219 58.4603 83.879 61.0046 83.879 64.1272C83.879 66.1897 85.6716 67.8667 87.8882 67.8667C90.1049 67.8667 91.8975 66.1897 91.8975 64.1272C91.8975 56.8604 85.633 50.9622 77.9229 50.9622C72.4487 50.9622 67.4371 54.0077 65.1819 58.7301C64.4301 60.2915 64.0446 62.1226 64.0446 64.1272C64.0446 65.6307 64.1795 68.0016 65.3361 71.0857C65.5288 71.5868 65.2782 72.1458 64.7771 72.3193C64.2759 72.512 63.7169 72.2422 63.5435 71.7603C62.599 69.2352 62.1363 66.7294 62.1363 64.1272C62.1363 61.8142 62.5797 59.7132 63.4471 57.882C66.0107 52.5042 71.6969 49.0154 77.9229 49.0154C86.6932 49.0154 93.825 55.781 93.825 64.108C93.825 67.2306 91.165 69.7749 87.8882 69.7749C84.6114 69.7749 81.9514 67.2306 81.9514 64.108C81.9514 62.0455 80.1588 60.3686 77.9421 60.3686C75.7255 60.3686 73.9329 62.0455 73.9329 64.108C73.9329 67.4041 75.205 70.4881 77.5374 72.8012C79.3685 74.613 81.1226 75.6154 83.8404 76.3671C84.3608 76.502 84.65 77.0417 84.515 77.5429C84.4187 77.9862 84.0139 78.2754 83.6091 78.2754Z"
                fill="#171923"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_425"
                x="0"
                y="-1"
                width="156"
                height="156"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="18" />
                <feGaussianBlur stdDeviation="20" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.439216 0 0 0 0 0.564706 0 0 0 0 0.690196 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_425"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_425"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_1_425">
                <rect
                  width="46.2609"
                  height="46.2609"
                  fill="white"
                  transform="translate(54.8695 35.8696)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className="text-lg text-white font-semibold text-center mb-2">
          Update your data !
        </h3>
        <p className="text-sm text-white text-center mb-4">
          Update your data and find the best opportunities
        </p>
        <Button>
          Update your data
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm text-gray-400 mb-2">Working schedule</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fulltime" />
                <label
                  htmlFor="fulltime"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full Time
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <label
                  htmlFor="internship"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Internship
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <label
                  htmlFor="freelance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Freelance
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contractual" />
                <label
                  htmlFor="contractual"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Contractual
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-400 mb-2">Employment type</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fullday" />
                <label
                  htmlFor="fullday"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Full day
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="flexible" />
                <label
                  htmlFor="flexible"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Flexible schedule
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <label
                  htmlFor="remote"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Distant work
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
