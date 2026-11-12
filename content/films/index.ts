import type { Film } from "@/lib/types";

import whatsUpTigerLily from "./whats-up-tiger-lily";
import takeTheMoneyAndRun from "./take-the-money-and-run";
import bananas from "./bananas";
import everythingYouAlwaysWantedToKnowAboutSex from "./everything-you-always-wanted-to-know-about-sex";
import sleeper from "./sleeper";
import loveAndDeath from "./love-and-death";
import annieHall from "./annie-hall";
import interiors from "./interiors";
import manhattan from "./manhattan";
import stardustMemories from "./stardust-memories";
import aMidsummerNightsSexComedy from "./a-midsummer-nights-sex-comedy";
import zelig from "./zelig";
import broadwayDannyRose from "./broadway-danny-rose";
import thePurpleRoseOfCairo from "./the-purple-rose-of-cairo";
import hannahAndHerSisters from "./hannah-and-her-sisters";
import radioDays from "./radio-days";
import september from "./september";
import anotherWoman from "./another-woman";
import oedipusWrecks from "./oedipus-wrecks";
import crimesAndMisdemeanors from "./crimes-and-misdemeanors";
import alice from "./alice";
import shadowsAndFog from "./shadows-and-fog";
import husbandsAndWives from "./husbands-and-wives";
import manhattanMurderMystery from "./manhattan-murder-mystery";
import bulletsOverBroadway from "./bullets-over-broadway";
import dontDrinkTheWater from "./dont-drink-the-water";
import mightyAphrodite from "./mighty-aphrodite";
import everyoneSaysILoveYou from "./everyone-says-i-love-you";
import deconstructingHarry from "./deconstructing-harry";
import celebrity from "./celebrity";
import sweetAndLowdown from "./sweet-and-lowdown";
import smallTimeCrooks from "./small-time-crooks";
import theCurseOfTheJadeScorpion from "./the-curse-of-the-jade-scorpion";
import hollywoodEnding from "./hollywood-ending";
import anythingElse from "./anything-else";
import melindaAndMelinda from "./melinda-and-melinda";
import matchPoint from "./match-point";
import scoop from "./scoop";
import cassandrasDream from "./cassandras-dream";
import vickyCristinaBarcelona from "./vicky-cristina-barcelona";
import whateverWorks from "./whatever-works";
import youWillMeetATallDarkStranger from "./you-will-meet-a-tall-dark-stranger";
import midnightInParis from "./midnight-in-paris";
import toRomeWithLove from "./to-rome-with-love";
import blueJasmine from "./blue-jasmine";
import magicInTheMoonlight from "./magic-in-the-moonlight";
import irrationalMan from "./irrational-man";
import cafeSociety from "./cafe-society";
import wonderWheel from "./wonder-wheel";
import aRainyDayInNewYork from "./a-rainy-day-in-new-york";
import rifkinsFestival from "./rifkins-festival";
import coupDeChance from "./coup-de-chance";

/**
 * The filmography.
 *
 * One file per film in this directory, registered here. All 52 released
 * directed works (50 theatrical features, the 1989 "Oedipus Wrecks"
 * segment of New York Stories, and the 1994 television film Don't Drink
 * the Water), populated from the verified research dossier
 * (research/woody-allen-master-dossier/films.md).
 *
 * Order: newest first (matches the /films listing).
 */
export const films: Film[] = [
  whatsUpTigerLily,
  takeTheMoneyAndRun,
  bananas,
  everythingYouAlwaysWantedToKnowAboutSex,
  sleeper,
  loveAndDeath,
  annieHall,
  interiors,
  manhattan,
  stardustMemories,
  aMidsummerNightsSexComedy,
  zelig,
  broadwayDannyRose,
  thePurpleRoseOfCairo,
  hannahAndHerSisters,
  radioDays,
  september,
  anotherWoman,
  oedipusWrecks,
  crimesAndMisdemeanors,
  alice,
  shadowsAndFog,
  husbandsAndWives,
  manhattanMurderMystery,
  bulletsOverBroadway,
  dontDrinkTheWater,
  mightyAphrodite,
  everyoneSaysILoveYou,
  deconstructingHarry,
  celebrity,
  sweetAndLowdown,
  smallTimeCrooks,
  theCurseOfTheJadeScorpion,
  hollywoodEnding,
  anythingElse,
  melindaAndMelinda,
  matchPoint,
  scoop,
  cassandrasDream,
  vickyCristinaBarcelona,
  whateverWorks,
  youWillMeetATallDarkStranger,
  midnightInParis,
  toRomeWithLove,
  blueJasmine,
  magicInTheMoonlight,
  irrationalMan,
  cafeSociety,
  wonderWheel,
  aRainyDayInNewYork,
  rifkinsFestival,
  coupDeChance,
].sort((a, b) => b.year - a.year);
