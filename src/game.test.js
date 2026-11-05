import test from 'node:test';
import assert from 'node:assert/strict';
import {questions,categories,newSession,rank} from './data.js';
test('question bank is complete in both languages with valid categories',()=>{assert.ok(questions.length>=20);for(const q of questions){assert.ok(categories.some(c=>c.id===q.category));for(const lang of ['en','ar'])for(const field of ['name','explanation','tip'])assert.ok(q[field][lang]);}});
test('sessions contain ten unique questions from the bank without mutation',()=>{const original=questions.map(q=>q.id);for(let i=0;i<100;i++){const s=newSession();assert.equal(s.length,10);assert.equal(new Set(s.map(q=>q.id)).size,10);assert.ok(s.every(q=>questions.includes(q)));}assert.deepEqual(questions.map(q=>q.id),original)});
test('performance thresholds',()=>{for(const [s,r] of [[0,3],[40,3],[50,2],[60,2],[70,1],[80,1],[90,0],[100,0]])assert.equal(rank(s),r)});
