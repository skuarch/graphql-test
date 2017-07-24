import express from 'express';
import mongoose from 'mongoose';
import graphHttp from 'express-graphql';

const app = express();
const db = mongoose.connect('mongodb://gotadmin:campus2017@ds011715.mlab.com:11715/got_api');