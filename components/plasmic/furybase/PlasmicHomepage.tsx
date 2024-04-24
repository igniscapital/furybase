// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bMPTChRPRGG4FjB1GGbWyW
// Component: LYs952dc6Uez

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { PlasmicHead } from "@plasmicapp/react-web";
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms";
import TextInput from "../../TextInput"; // plasmic-import: g-HFqyIPdzDj/component
import Button from "../../Button"; // plasmic-import: 8hPr28mBOJd-/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import Dialog from "../../Dialog"; // plasmic-import: A_kMFsD1dPTD/component

import { useScreenVariants as useScreenVariants_4KB6YnSCj1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 4--kB6YnSCj1/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bMPTChRPRGG4FjB1GGbWyW/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: LYs952dc6Uez/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: mYRtNPT7uLEt/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: LOyBTyXJ4zWr/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: RWD3ch4lzSH9/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  pageMetadataOverride?: Flex__<typeof PlasmicHead>;
  loadingBoundary?: Flex__<typeof LoadingBoundary>;
  section?: Flex__<"section">;
  walletchecker?: Flex__<"section">;
  cmsDataFetcher?: Flex__<typeof CmsQueryRepeater>;
  textInput?: Flex__<typeof TextInput>;
  embedHtml?: Flex__<typeof Embed>;
  dialog?: Flex__<typeof Dialog>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "keySrc",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "dialog.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_4KB6YnSCj1()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicHomepage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicHomepage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <PlasmicHead
            data-plasmic-name={"pageMetadataOverride"}
            data-plasmic-override={overrides.pageMetadataOverride}
            className={classNames("__wab_instance", sty.pageMetadataOverride)}
            description={"When the road gets blurry, it's time to Fury."}
            image={"/plasmic/furybase/images/furyBaseLogopng.png"}
            title={"Fury Base"}
          />

          <LoadingBoundary
            data-plasmic-name={"loadingBoundary"}
            data-plasmic-override={overrides.loadingBoundary}
            className={classNames("__wab_instance", sty.loadingBoundary)}
            loadingState={null}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <section
                    data-plasmic-name={"section"}
                    data-plasmic-override={overrides.section}
                    className={classNames(projectcss.all, sty.section)}
                  >
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal___5BhD
                      )}
                      duration={3000}
                      triggerOnce={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xest9
                        )}
                      >
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img__na4NA)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"none"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "300px"
                              : "700px"
                          }
                          src={{
                            src: "/plasmic/furybase/images/moonpng.png",
                            fullWidth: 4000,
                            fullHeight: 4000,
                            aspectRatio: undefined
                          }}
                        />
                      </div>
                    </Reveal>
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__dEjIg
                      )}
                      direction={"left"}
                      duration={3000}
                      reverse={false}
                      triggerOnce={false}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__mj4Ja)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"none"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "200px"
                            : "400px"
                        }
                        src={{
                          src: "/plasmic/furybase/images/cloud1Png.png",
                          fullWidth: 4000,
                          fullHeight: 4000,
                          aspectRatio: undefined
                        }}
                      />
                    </Reveal>
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__tMxE8
                      )}
                      direction={"right"}
                      duration={3000}
                      triggerOnce={false}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__zhDh6)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"none"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "200px"
                            : "400px"
                        }
                        src={{
                          src: "/plasmic/furybase/images/cloud2Png.png",
                          fullWidth: 4000,
                          fullHeight: 4000,
                          aspectRatio: undefined
                        }}
                      />
                    </Reveal>
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__ntuj4
                      )}
                      direction={"up"}
                      duration={5000}
                      effect={"slide"}
                      triggerOnce={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__wkeDz
                        )}
                      >
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img__mdZn)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"none"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "200px"
                              : "420px"
                          }
                          src={{
                            src: "/plasmic/furybase/images/furyBaseLogopng.png",
                            fullWidth: 4000,
                            fullHeight: 4000,
                            aspectRatio: undefined
                          }}
                        />
                      </div>
                    </Reveal>
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__y3Ich
                      )}
                      direction={"left"}
                      duration={3000}
                      triggerOnce={false}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__cgFnb)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"none"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "300px"
                            : "600px"
                        }
                        src={{
                          src: "/plasmic/furybase/images/bannerRightpng.png",
                          fullWidth: 4000,
                          fullHeight: 4000,
                          aspectRatio: undefined
                        }}
                      />
                    </Reveal>
                    <Reveal
                      className={classNames("__wab_instance", sty.reveal__nHz)}
                      direction={"right"}
                      duration={3000}
                      effect={"fade"}
                      triggerOnce={false}
                    >
                      <PlasmicImg__
                        alt={""}
                        className={classNames(sty.img__gcsLh)}
                        displayHeight={"auto"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"none"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "300px"
                            : "600px"
                        }
                        src={{
                          src: "/plasmic/furybase/images/bannerLeftpng.png",
                          fullWidth: 4000,
                          fullHeight: 4000,
                          aspectRatio: undefined
                        }}
                      />
                    </Reveal>
                    <Reveal
                      className={classNames(
                        "__wab_instance",
                        sty.reveal__qW73R
                      )}
                      direction={"up"}
                      duration={3000}
                      triggerOnce={false}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__su4FB
                        )}
                      >
                        <PlasmicImg__
                          alt={""}
                          className={classNames(sty.img__p2Jb6)}
                          displayHeight={"auto"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"none"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? "500px"
                              : "800px"
                          }
                          src={{
                            src: "/plasmic/furybase/images/toriipng.png",
                            fullWidth: 4000,
                            fullHeight: 4000,
                            aspectRatio: undefined
                          }}
                        />
                      </div>
                    </Reveal>
                  </section>
                  <section
                    data-plasmic-name={"walletchecker"}
                    data-plasmic-override={overrides.walletchecker}
                    className={classNames(projectcss.all, sty.walletchecker)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___4PwDg
                      )}
                    >
                      <CmsQueryRepeater
                        data-plasmic-name={"cmsDataFetcher"}
                        data-plasmic-override={overrides.cmsDataFetcher}
                        className={classNames(
                          "__wab_instance",
                          sty.cmsDataFetcher
                        )}
                        desc={false}
                        emptyMessage={
                          <DataCtxReader__>
                            {$ctx => (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__rhd1M
                                )}
                              >
                                {"No matching published entries found."}
                              </div>
                            )}
                          </DataCtxReader__>
                        }
                        filterField={"walletAddress"}
                        filterValue={(() => {
                          try {
                            return $state.keySrc;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        forceEmptyState={false}
                        forceLoadingState={false}
                        limit={0}
                        loadingMessage={
                          <DataCtxReader__>
                            {$ctx => (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__bVdDx
                                )}
                              >
                                {"Loading..."}
                              </div>
                            )}
                          </DataCtxReader__>
                        }
                        mode={"count"}
                        noAutoRepeat={false}
                        noLayout={false}
                        useDraft={false}
                      >
                        <DataCtxReader__>
                          {$ctx => (
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__czPv9
                              )}
                            >
                              <TextInput
                                data-plasmic-name={"textInput"}
                                data-plasmic-override={overrides.textInput}
                                className={classNames(
                                  "__wab_instance",
                                  sty.textInput
                                )}
                                onChange={(...eventArgs) => {
                                  generateStateOnChangeProp($state, [
                                    "textInput",
                                    "value"
                                  ])(
                                    (e => e.target?.value).apply(
                                      null,
                                      eventArgs
                                    )
                                  );
                                }}
                                placeholder={"Input your wallet address here"}
                                value={
                                  generateStateValueProp($state, [
                                    "textInput",
                                    "value"
                                  ]) ?? ""
                                }
                              />

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__iwUcG
                                )}
                                onClick={async event => {
                                  const $steps = {};

                                  $steps["updateKeySrc"] = true
                                    ? (() => {
                                        const actionArgs = {
                                          variable: {
                                            objRoot: $state,
                                            variablePath: ["keySrc"]
                                          },
                                          operation: 0,
                                          value: $state.textInput.value
                                        };
                                        return (({
                                          variable,
                                          value,
                                          startIndex,
                                          deleteCount
                                        }) => {
                                          if (!variable) {
                                            return;
                                          }
                                          const { objRoot, variablePath } =
                                            variable;

                                          $stateSet(
                                            objRoot,
                                            variablePath,
                                            value
                                          );
                                          return value;
                                        })?.apply(null, [actionArgs]);
                                      })()
                                    : undefined;
                                  if (
                                    $steps["updateKeySrc"] != null &&
                                    typeof $steps["updateKeySrc"] ===
                                      "object" &&
                                    typeof $steps["updateKeySrc"].then ===
                                      "function"
                                  ) {
                                    $steps["updateKeySrc"] = await $steps[
                                      "updateKeySrc"
                                    ];
                                  }
                                }}
                              />

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__kfuQo
                                )}
                              >
                                <React.Fragment>
                                  {(() => {
                                    try {
                                      return $ctx.plasmicCmsFuryWlCount;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return "";
                                      }
                                      throw e;
                                    }
                                  })()}
                                </React.Fragment>
                              </div>
                            </div>
                          )}
                        </DataCtxReader__>
                      </CmsQueryRepeater>
                    </div>
                  </section>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </LoadingBoundary>
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
            code={
              "<script>\r\nconst audio = new Audio('https://site-assets.plasmic.app/ad356dd0474f793dfa08930f74523567.mp3');\r\n</script>"
            }
          />

          <Dialog
            data-plasmic-name={"dialog"}
            data-plasmic-override={overrides.dialog}
            body={
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__tfCxb)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__kuKxr)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"600px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/furybase/images/furyBaseLogopng.png",
                    fullWidth: 4000,
                    fullHeight: 4000,
                    aspectRatio: undefined
                  }}
                />

                <Button
                  className={classNames("__wab_instance", sty.button___56NEe)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["runCode"] = true
                      ? (() => {
                          const actionArgs = {
                            customFunction: async () => {
                              return document.addEventListener("click", () => {
                                audio.play();
                              });
                            }
                          };
                          return (({ customFunction }) => {
                            return customFunction();
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["runCode"] != null &&
                      typeof $steps["runCode"] === "object" &&
                      typeof $steps["runCode"].then === "function"
                    ) {
                      $steps["runCode"] = await $steps["runCode"];
                    }

                    $steps["updateDialogOpen"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ["dialog", "open"]
                            },
                            operation: 4
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            const oldValue = $stateGet(objRoot, variablePath);
                            $stateSet(objRoot, variablePath, !oldValue);
                            return !oldValue;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["updateDialogOpen"] != null &&
                      typeof $steps["updateDialogOpen"] === "object" &&
                      typeof $steps["updateDialogOpen"].then === "function"
                    ) {
                      $steps["updateDialogOpen"] = await $steps[
                        "updateDialogOpen"
                      ];
                    }
                  }}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wc08E
                    )}
                  >
                    {"Enter the Fury Gate"}
                  </div>
                </Button>
              </Stack__>
            }
            className={classNames("__wab_instance", sty.dialog)}
            noTrigger={true}
            onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
            open={generateStateValueProp($state, ["dialog", "open"])}
            title={null}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageMetadataOverride",
    "loadingBoundary",
    "section",
    "walletchecker",
    "cmsDataFetcher",
    "textInput",
    "embedHtml",
    "dialog"
  ],
  pageMetadataOverride: ["pageMetadataOverride"],
  loadingBoundary: [
    "loadingBoundary",
    "section",
    "walletchecker",
    "cmsDataFetcher",
    "textInput"
  ],
  section: ["section"],
  walletchecker: ["walletchecker", "cmsDataFetcher", "textInput"],
  cmsDataFetcher: ["cmsDataFetcher", "textInput"],
  textInput: ["textInput"],
  embedHtml: ["embedHtml"],
  dialog: ["dialog"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageMetadataOverride: typeof PlasmicHead;
  loadingBoundary: typeof LoadingBoundary;
  section: "section";
  walletchecker: "section";
  cmsDataFetcher: typeof CmsQueryRepeater;
  textInput: typeof TextInput;
  embedHtml: typeof Embed;
  dialog: typeof Dialog;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageMetadataOverride: makeNodeComponent("pageMetadataOverride"),
    loadingBoundary: makeNodeComponent("loadingBoundary"),
    section: makeNodeComponent("section"),
    walletchecker: makeNodeComponent("walletchecker"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    textInput: makeNodeComponent("textInput"),
    embedHtml: makeNodeComponent("embedHtml"),
    dialog: makeNodeComponent("dialog"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Fury Base",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
